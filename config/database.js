module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-super-fog-a2ja7kzo.eu-central-1.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ai_resume_db'),
      user: env('DATABASE_USERNAME', 'ai_resume_db_owner'),
      password: env('DATABASE_PASSWORD', 'sfM3TFO6YtKD'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
