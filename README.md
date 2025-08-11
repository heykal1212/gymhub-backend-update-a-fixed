# GymHub Backend – Update A (Fixed)
Deploy on Railway with Postgres.

## Env
PORT=3000
NODE_ENV=production
JWT_SECRET=<random>
FRONTEND_URL=https://gymhub-frontend.vercel.app
DATABASE_URL=<postgres url>
STRIPE_SECRET_KEY=sk_test_xxx (optional)

## Build steps
- Railway will run: npm install → prisma generate → tsc
- After deploy: run
  npx prisma generate
  npx prisma migrate deploy
  npm run prisma:seed