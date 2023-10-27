import 'dotenv/config';

export const applicationConfig = {
  // App
  app: {
    env: process.env.APP_ENV,
    port: process.env.NODE_ENV === 'development' ? '4001' : '3000',
  },

  // Database
  db: {
    db_dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },

  rateLimit: {
    ttl: process.env.REQUEST_TTL || '60',
    limit: process.env.REQUEST_LIMIT || '10',
  },
};
