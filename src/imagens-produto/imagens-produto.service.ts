import { Injectable } from '@nestjs/common';
import { CreateImagensProdutoDto } from './dto/create-imagens-produto.dto';
import { UpdateImagensProdutoDto } from './dto/update-imagens-produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ImagensProdutoService {
  constructor(private prisma: PrismaService) {}

  create(createImagensProdutoDto: CreateImagensProdutoDto) {
    return this.prisma.imagemProduto.create({
      data: {
        produto_id: createImagensProdutoDto.produto_id,
        url_imagem: createImagensProdutoDto.url_imagem,
        ordem: createImagensProdutoDto.ordem,
      },
    });
  }

  findAll() {
    return this.prisma.imagemProduto.findMany();
  }

  findOne(id: number) {
    return this.prisma.imagemProduto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateImagensProdutoDto: UpdateImagensProdutoDto) {
    return this.prisma.imagemProduto.update({
      where: { id },
      data: updateImagensProdutoDto,
    });
  }

  remove(id: number) {
    return this.prisma.imagemProduto.delete({
      where: { id },
    });
  }
}