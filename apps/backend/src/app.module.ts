import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentsModule } from './students/students.module'

import connectionOptions from './config/database'

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), StudentsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
