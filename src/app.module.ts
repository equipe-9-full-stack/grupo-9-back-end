import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ImagensProdutoModule } from './imagens-produto/imagens-produto.module';
import { ComentariosAvaliacaoModule } from './comentarios-avaliacao/comentarios-avaliacao.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProdutosModule, ImagensProdutoModule, ComentariosAvaliacaoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
