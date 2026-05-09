import { Module } from '@nestjs/common';
import { ComentariosAvaliacaoService } from './comentarios-avaliacao.service';
import { ComentariosAvaliacaoController } from './comentarios-avaliacao.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ComentariosAvaliacaoController],
  providers: [ComentariosAvaliacaoService, PrismaService],
})
export class ComentariosAvaliacaoModule {}