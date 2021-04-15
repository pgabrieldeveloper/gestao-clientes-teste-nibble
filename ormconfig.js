module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ['./dist/modules/**/typeorm/entities/*.js'],
  migrations: ['./dist/shared/typeorm/migrations/*.js'],
  cli: {
    migrationsDir: './src/shared/typeorm/migrations',
  },
};
