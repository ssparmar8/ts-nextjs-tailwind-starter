cd /var/www/nextjs-app

sudo pnpm run build

pm2 delete nextjs-app

pm2 start pnpm --name nextjs-app -- start
