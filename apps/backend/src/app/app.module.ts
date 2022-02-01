import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import connectionOptions from './config/database'

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions)],
  controllers: [],
  providers: []
})
export class AppModule {}
