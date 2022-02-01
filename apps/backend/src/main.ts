/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3333

  const options = new DocumentBuilder()
    .setTitle('NX NestJS API')
    .setVersion('1.0')
    .addServer(`http://localhost:${port}`)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup(`${globalPrefix}/docs`, app, document)

  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
