import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvaliacaoLojaModule } from './avaliacao-loja/avaliacao-loja.module';

// Importações da sua branch
import { ProdutosModule } from './produtos/produtos.module';
import { ImagensProdutoModule } from './imagens-produto/imagens-produto.module';
import { ComentariosAvaliacaoModule } from './comentarios-avaliacao/comentarios-avaliacao.module';
import { PrismaService } from './prisma/prisma.service';

// Importações da branch dev
import { UsuariosModule } from './usuarios/usuarios.module';
import { LojasModule } from './lojas/lojas.module';

@Module({
  imports: [
    AvaliacaoLojaModule,
    ProdutosModule,
    ImagensProdutoModule,
    ComentariosAvaliacaoModule,
    UsuariosModule,
    LojasModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}