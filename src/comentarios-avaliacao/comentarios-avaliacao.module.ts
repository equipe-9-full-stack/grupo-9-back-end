import { Module } from '@nestjs/common';
import { ComentariosAvaliacaoService } from './comentarios-avaliacao.service';
import { ComentariosAvaliacaoController } from './comentarios-avaliacao.controller';

@Module({
  controllers: [ComentariosAvaliacaoController],
  providers: [ComentariosAvaliacaoService],
})
export class ComentariosAvaliacaoModule {}
