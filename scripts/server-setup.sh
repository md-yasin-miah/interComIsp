#!/bin/bash

# Server Setup Script for Inter-Com ISP Deployment
# Run this script on your SSH server to prepare it for GitHub Actions deployments

set -e

echo "🚀 Setting up server for Inter-Com ISP deployment..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "📦 Installing required packages..."
sudo apt install -y curl wget git nginx rsync

# Install Node.js (using NodeSource repository)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Create deployment directory
echo "📁 Creating deployment directories..."
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www

# Setup PM2 to start on boot
echo "⚙️ Setting up PM2 startup..."
pm2 startup
echo "Run the command above if prompted, then continue..."

# Create nginx configuration
echo "🌐 Setting up Nginx configuration..."
sudo tee /etc/nginx/sites-available/inter-com-isp > /dev/null << 'EOF'
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain
    
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
        proxy_read_timeout 86400;
    }
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/inter-com-isp /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Setup firewall (if ufw is available)
if command -v ufw &> /dev/null; then
    echo "🔥 Configuring firewall..."
    sudo ufw allow ssh
    sudo ufw allow 'Nginx Full'
    sudo ufw --force enable
fi

# Create a deployment user (optional, for better security)
echo "👤 Creating deployment user..."
sudo useradd -m -s /bin/bash deploy || echo "User 'deploy' already exists"
sudo usermod -aG sudo deploy
sudo mkdir -p /home/deploy/.ssh
sudo chown -R deploy:deploy /home/deploy/.ssh
sudo chmod 700 /home/deploy/.ssh

echo "✅ Server setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Add your GitHub Actions public key to authorized_keys:"
echo "   sudo nano /home/deploy/.ssh/authorized_keys"
echo "   (or use the current user's authorized_keys)"
echo ""
echo "2. Set up GitHub Secrets with these values:"
echo "   - SSH_HOST: Your server IP or domain"
echo "   - SSH_USER: deploy (or your current user)"
echo "   - SSH_PRIVATE_KEY: Your private SSH key"
echo "   - NEXT_PUBLIC_PROTOCOL: http or https"
echo "   - NEXT_PUBLIC_HOSTNAME: Your API hostname"
echo ""
echo "3. Update the Nginx server_name in /etc/nginx/sites-available/inter-com-isp"
echo "4. Consider setting up SSL with Let's Encrypt (certbot)"
echo ""
echo "5. Test the deployment by pushing to your main branch!" 