cd /var/www/nextjs-app

sudo pnpm run build

sudo pm2 delete nextjs-app

pm2 start --name your-app-name --interpreter pnpm -- start
