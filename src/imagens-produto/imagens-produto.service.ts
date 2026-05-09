import { Injectable } from '@nestjs/common';
import { CreateImagensProdutoDto } from './dto/create-imagens-produto.dto';
import { UpdateImagensProdutoDto } from './dto/update-imagens-produto.dto';

@Injectable()
export class ImagensProdutoService {
  create(createImagensProdutoDto: CreateImagensProdutoDto) {
    return 'This action adds a new imagensProduto';
  }

  findAll() {
    return `This action returns all imagensProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagensProduto`;
  }

  update(id: number, updateImagensProdutoDto: UpdateImagensProdutoDto) {
    return `This action updates a #${id} imagensProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagensProduto`;
  }
}
