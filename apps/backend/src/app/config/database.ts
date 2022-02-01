import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  synchronize: false,
  logging: true,
  migrationsRun: false,
  autoLoadEntities: true,
  migrations: ['./src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations/'
  },
  host: process.env.DB_HOSTNAME,
  port: <number><unknown>process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}

export default connectionOptions
