import { Module } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { PrismaService } from '../usuarios/prisma/prisma.service';

@Module({
  providers: [LojasService, PrismaService],
  controllers: [LojasController],
})
export class LojasModule {}