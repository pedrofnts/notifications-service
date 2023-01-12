import { PrismaService } from './infra/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
