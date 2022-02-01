import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as entities from '../database/entities'

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  synchronize: false,
  logging: true,
  migrationsRun: false,
  autoLoadEntities: false,
  entities: Object.values(entities),
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
