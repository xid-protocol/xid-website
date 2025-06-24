#!/bin/bash

# Deploy script for xid-website
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting deployment of xid-website...${NC}"

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker first.${NC}"
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ docker-compose is not installed.${NC}"
    exit 1
fi

# Create Caddy volumes if they don't exist
echo -e "${YELLOW}📦 Creating Caddy volumes...${NC}"
docker volume create caddy_data || true

# Pull latest changes (if in git repo)
if [ -d ".git" ]; then
    echo -e "${YELLOW}📥 Pulling latest changes...${NC}"
    git pull origin main
fi

# Build and start services
echo -e "${YELLOW}🔨 Building and starting services...${NC}"
docker-compose down --remove-orphans
docker-compose build --no-cache
docker-compose up -d

# Wait for services to be ready
echo -e "${YELLOW}⏳ Waiting for services to be ready...${NC}"
sleep 30

# Health check
echo -e "${YELLOW}🔍 Performing health check...${NC}"
if curl -f http://localhost:80 > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Deployment successful! Site is running.${NC}"
else
    echo -e "${RED}❌ Health check failed. Check logs:${NC}"
    docker-compose logs
    exit 1
fi

# Clean up old images
echo -e "${YELLOW}🧹 Cleaning up old images...${NC}"
docker image prune -f

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}📱 Your site should be available at: http://your-domain.com${NC}"
echo -e "${YELLOW}💡 Don't forget to update the domain in Caddyfile!${NC}" 