#!/bin/bash

# Deployment Status Checker
# This script checks the status of the Inter-Com ISP deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Inter-Com ISP Deployment Status Check${NC}"
echo "=================================================="

# Check if PM2 is running
echo -e "\n${YELLOW}📊 PM2 Status:${NC}"
if command -v pm2 &> /dev/null; then
    pm2 status
else
    echo -e "${RED}❌ PM2 is not installed${NC}"
fi

# Check application health
echo -e "\n${YELLOW}🏥 Application Health:${NC}"
response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null || echo "000")

if [ "$response" = "200" ]; then
    echo -e "${GREEN}✅ Application is responding (HTTP $response)${NC}"
else
    echo -e "${RED}❌ Application is not responding (HTTP $response)${NC}"
fi

# Check Nginx status
echo -e "\n${YELLOW}🌐 Nginx Status:${NC}"
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✅ Nginx is running${NC}"
    
    # Check Nginx configuration
    if nginx -t &> /dev/null; then
        echo -e "${GREEN}✅ Nginx configuration is valid${NC}"
    else
        echo -e "${RED}❌ Nginx configuration has errors${NC}"
    fi
else
    echo -e "${RED}❌ Nginx is not running${NC}"
fi

# Check deployment directory
echo -e "\n${YELLOW}📁 Deployment Directory:${NC}"
if [ -L "/var/www/inter-com-isp-current" ]; then
    current_deployment=$(readlink -f /var/www/inter-com-isp-current)
    echo -e "${GREEN}✅ Current deployment: $current_deployment${NC}"
    
    # Show deployment timestamp
    deployment_name=$(basename "$current_deployment")
    if [[ $deployment_name =~ inter-com-isp_([0-9]{8}_[0-9]{6}) ]]; then
        timestamp=${BASH_REMATCH[1]}
        formatted_date=$(date -d "${timestamp:0:8} ${timestamp:9:2}:${timestamp:11:2}:${timestamp:13:2}" 2>/dev/null || echo "Unknown")
        echo -e "${BLUE}📅 Deployed at: $formatted_date${NC}"
    fi
else
    echo -e "${RED}❌ No current deployment symlink found${NC}"
fi

# Show recent deployments
echo -e "\n${YELLOW}📋 Recent Deployments:${NC}"
if [ -d "/var/www" ]; then
    ls -la /var/www/ | grep "inter-com-isp_" | head -5
else
    echo -e "${RED}❌ Deployment directory not found${NC}"
fi

# Check disk space
echo -e "\n${YELLOW}💾 Disk Usage:${NC}"
df -h /var/www 2>/dev/null || df -h /

# Check memory usage
echo -e "\n${YELLOW}🧠 Memory Usage:${NC}"
free -h

# Check system load
echo -e "\n${YELLOW}⚡ System Load:${NC}"
uptime

# Show recent logs if PM2 is available
echo -e "\n${YELLOW}📝 Recent Application Logs:${NC}"
if command -v pm2 &> /dev/null && pm2 list | grep -q "inter-com-isp"; then
    echo "Last 10 log entries:"
    pm2 logs inter-com-isp --lines 10 --nostream 2>/dev/null || echo "No logs available"
else
    echo -e "${RED}❌ PM2 process not found${NC}"
fi

echo -e "\n${BLUE}=================================================="
echo -e "Status check completed at $(date)${NC}" 