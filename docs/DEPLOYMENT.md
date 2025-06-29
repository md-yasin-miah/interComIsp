# CI/CD Deployment Guide

This guide explains how to set up continuous integration and deployment for the Inter-Com ISP project using GitHub Actions and SSH deployment.

## Overview

The CI/CD pipeline includes:
- **Build & Test**: Installs dependencies, runs linting, and builds the Next.js application
- **Deploy**: Deploys to your SSH server using rsync and PM2
- **Health Check**: Verifies the deployment is working correctly

## Prerequisites

- A Linux server with SSH access
- GitHub repository with admin access
- Domain name (optional but recommended)

## Server Setup

### 1. Prepare Your Server

Run the server setup script on your target server:

```bash
# Download and run the setup script
wget https://raw.githubusercontent.com/your-username/inter-com-isp/main/scripts/server-setup.sh
chmod +x server-setup.sh
./server-setup.sh
```

Or manually install the requirements:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2, Nginx, and other tools
sudo npm install -g pm2
sudo apt install -y nginx rsync git
```

### 2. Configure Nginx

Edit the Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/inter-com-isp
```

Update the `server_name` with your domain:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/inter-com-isp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## GitHub Setup

### 1. Generate SSH Key Pair

On your local machine, generate an SSH key pair for GitHub Actions:

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions@your-domain.com" -f ~/.ssh/github-actions
```

### 2. Add Public Key to Server

Copy the public key to your server:

```bash
# Copy public key
cat ~/.ssh/github-actions.pub

# On your server, add to authorized_keys
echo "your-public-key-here" >> ~/.ssh/authorized_keys
# or if using deploy user:
sudo su - deploy
echo "your-public-key-here" >> ~/.ssh/authorized_keys
```

### 3. Configure GitHub Secrets

In your GitHub repository, go to Settings → Secrets and Variables → Actions, and add these secrets:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SSH_HOST` | Your server IP or domain | `123.45.67.89` or `your-server.com` |
| `SSH_USER` | SSH username | `deploy` or `ubuntu` |
| `SSH_PRIVATE_KEY` | Private SSH key content | Contents of `~/.ssh/github-actions` |
| `NEXT_PUBLIC_PROTOCOL` | Protocol for API calls | `https` |
| `NEXT_PUBLIC_HOSTNAME` | API hostname | `api.your-domain.com` |

To get the private key content:

```bash
cat ~/.ssh/github-actions
```

Copy the entire output including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`.

## Workflow Details

### Trigger Events

The workflow runs on:
- Push to `main` branch (triggers deployment)
- Push to `develop` branch (build and test only)
- Pull requests to `main` branch (build and test only)

### Jobs

#### 1. Build and Test
- Checks out code
- Sets up Node.js 18
- Installs dependencies
- Runs linting
- Builds the application
- Uploads build artifacts

#### 2. Deploy (main branch only)
- Downloads build artifacts
- Sets up SSH connection
- Creates timestamped deployment directory
- Syncs files to server
- Installs production dependencies
- Manages PM2 processes
- Updates symlinks
- Cleans up old deployments

#### 3. Health Check
- Waits for application startup
- Performs HTTP health check
- Reports deployment status

## SSL Setup (Optional)

To enable HTTPS with Let's Encrypt:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal is set up automatically
```

## Monitoring and Maintenance

### PM2 Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs inter-com-isp

# Restart application
pm2 restart inter-com-isp

# Monitor resources
pm2 monit
```

### Nginx Commands

```bash
# Check status
sudo systemctl status nginx

# View logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx
```

### Deployment Directories

- Current deployment: `/var/www/inter-com-isp-current` (symlink)
- Timestamped deployments: `/var/www/inter-com-isp_YYYYMMDD_HHMMSS`
- Old deployments are automatically cleaned up (keeps last 3)

## Troubleshooting

### Common Issues

1. **SSH Connection Failed**
   - Check SSH key is correctly added to server
   - Verify SSH_HOST, SSH_USER, and SSH_PRIVATE_KEY secrets
   - Ensure server allows SSH connections

2. **Build Failed**
   - Check environment variables are set correctly
   - Verify all dependencies are listed in package.json
   - Review build logs for specific errors

3. **Deployment Failed**
   - Check server has sufficient disk space
   - Verify PM2 is installed and working
   - Check file permissions on deployment directory

4. **Application Not Starting**
   - Review PM2 logs: `pm2 logs inter-com-isp`
   - Check if port 3000 is available
   - Verify environment variables are set correctly

### Debug Commands

```bash
# Check deployment status
ssh user@server "pm2 status"

# View recent deployments
ssh user@server "ls -la /var/www/"

# Check Nginx configuration
ssh user@server "sudo nginx -t"

# View application logs
ssh user@server "pm2 logs inter-com-isp --lines 50"
```

## Security Considerations

1. **SSH Key Management**
   - Use dedicated SSH keys for GitHub Actions
   - Regularly rotate SSH keys
   - Limit SSH key permissions

2. **Server Security**
   - Keep server packages updated
   - Use firewall (ufw) to limit open ports
   - Consider using non-standard SSH port
   - Enable fail2ban for SSH protection

3. **Environment Variables**
   - Never commit sensitive data to repository
   - Use GitHub Secrets for all sensitive configuration
   - Regularly audit and rotate secrets

## Next Steps

1. Test the deployment by pushing to main branch
2. Set up monitoring and alerting
3. Configure automated backups
4. Set up staging environment
5. Implement blue-green deployment strategy 