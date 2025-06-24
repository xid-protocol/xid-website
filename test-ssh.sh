#!/bin/bash

# SSH 连接测试脚本
set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔧 测试 SSH 连接到服务器...${NC}"

# 检查必要的环境变量
if [ -z "$HOST" ] || [ -z "$USERNAME" ] || [ -z "$SSH_KEY_PATH" ]; then
    echo -e "${RED}❌ 请设置环境变量：${NC}"
    echo "export HOST=你的服务器IP"
    echo "export USERNAME=root" 
    echo "export SSH_KEY_PATH=~/.ssh/github_actions_rsa"
    exit 1
fi

echo -e "${YELLOW}📡 连接信息：${NC}"
echo "主机: $HOST"
echo "用户: $USERNAME"
echo "密钥: $SSH_KEY_PATH"

# 测试 SSH 连接
echo -e "${YELLOW}🔍 测试 SSH 连接...${NC}"
if ssh -i $SSH_KEY_PATH -o ConnectTimeout=10 -o BatchMode=yes $USERNAME@$HOST "echo 'SSH 连接成功!'" 2>/dev/null; then
    echo -e "${GREEN}✅ SSH 连接正常${NC}"
else
    echo -e "${RED}❌ SSH 连接失败${NC}"
    echo "请检查："
    echo "1. 服务器 IP 地址是否正确"
    echo "2. SSH 密钥是否正确配置"
    echo "3. 服务器防火墙是否开放 SSH 端口"
    exit 1
fi

# 测试服务器环境
echo -e "${YELLOW}🐳 检查服务器 Docker 环境...${NC}"
if ssh -i $SSH_KEY_PATH $USERNAME@$HOST "docker --version" 2>/dev/null; then
    echo -e "${GREEN}✅ Docker 已安装${NC}"
else
    echo -e "${RED}❌ Docker 未安装或不可用${NC}"
    exit 1
fi

# 检查部署目录
echo -e "${YELLOW}📁 检查部署目录...${NC}"
if ssh -i $SSH_KEY_PATH $USERNAME@$HOST "ls -la /opt/xid-website" 2>/dev/null; then
    echo -e "${GREEN}✅ 部署目录存在${NC}"
else
    echo -e "${YELLOW}⚠️  部署目录不存在，需要创建${NC}"
fi

echo -e "${GREEN}🎉 SSH 连接测试完成！${NC}" 