import { Injectable } from '@nestjs/common';
import { createcategoriasdto } from './Dto/create-categorias.dto '
import { UpdateCategoriasDto } from './Dto/update-categorias.dto'
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(dto: createcategoriasdto ) {
    return this.prisma.categoria.create({
      data: {
        nome: dto.nome,
        categoria_pai_id: dto.categoria_pai_id ?? null,
      },
    });
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateCategoriasDto) {
    return this.prisma.categoria.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.categoria.delete({
      where: { id },
    });
  }
}