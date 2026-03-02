#!/bin/bash

# M-PAD Launch Page Deployment Script
# Target: launch.mpad.online
# Host: 157.10.252.74

REMOTE_PATH="/home/sipanda/launch-mpad"
HOST="157.10.252.74"
USER="sipanda"

echo "🚀 Starting Deployment to launch.mpad.online..."

# 1. Ensure local commit
git add .
git commit -m "Elite Design Final Update" || echo "No changes to commit"

# 2. Sync files using rsync (Fastest for static sites)
echo "📦 Syncing files to VPS..."
rsync -avz --exclude '.git' --exclude '.github' ./ $USER@$HOST:$REMOTE_PATH

# 3. Success message
echo "✨ Deployment Complete! Visit: https://launch.mpad.online"
