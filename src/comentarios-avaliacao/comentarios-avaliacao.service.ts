import { Injectable } from '@nestjs/common';
import { CreateComentariosAvaliacaoDto } from './dto/create-comentarios-avaliacao.dto';
import { UpdateComentariosAvaliacaoDto } from './dto/update-comentarios-avaliacao.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ComentariosAvaliacaoService {
  constructor(private prisma: PrismaService) {}

  create(createComentariosAvaliacaoDto: CreateComentariosAvaliacaoDto) {
    return this.prisma.comentarioAvaliacao.create({
      data: {
        usuario_id: createComentariosAvaliacaoDto.usuario_id,
        avaliacao_loja_id: createComentariosAvaliacaoDto.avaliacao_loja_id,
        avaliacao_produto_id: createComentariosAvaliacaoDto.avaliacao_produto_id,
        conteudo: createComentariosAvaliacaoDto.conteudo,
      },
    });
  }

  findAll() {
    return this.prisma.comentarioAvaliacao.findMany();
  }

  findOne(id: number) {
    return this.prisma.comentarioAvaliacao.findUnique({
      where: { id },
    });
  }

  update(id: number, updateComentariosAvaliacaoDto: UpdateComentariosAvaliacaoDto) {
    return this.prisma.comentarioAvaliacao.update({
      where: { id },
      data: updateComentariosAvaliacaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.comentarioAvaliacao.delete({
      where: { id },
    });
  }
}