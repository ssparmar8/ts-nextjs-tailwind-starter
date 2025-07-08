cd /var/www/nextjs-app

sudo pnpm run build

sudo pm2 delete nextjs-app

sudo pm2 start pnpm --name "nextjs-app" -- start
