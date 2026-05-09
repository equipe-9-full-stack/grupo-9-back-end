import { Injectable } from '@nestjs/common';
import { CreateComentariosAvaliacaoDto } from './dto/create-comentarios-avaliacao.dto';
import { UpdateComentariosAvaliacaoDto } from './dto/update-comentarios-avaliacao.dto';

@Injectable()
export class ComentariosAvaliacaoService {
  create(createComentariosAvaliacaoDto: CreateComentariosAvaliacaoDto) {
    return 'This action adds a new comentariosAvaliacao';
  }

  findAll() {
    return `This action returns all comentariosAvaliacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentariosAvaliacao`;
  }

  update(id: number, updateComentariosAvaliacaoDto: UpdateComentariosAvaliacaoDto) {
    return `This action updates a #${id} comentariosAvaliacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentariosAvaliacao`;
  }
}
