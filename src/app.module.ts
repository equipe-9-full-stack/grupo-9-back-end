import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { AvaliacaoProdutoModule } from './avaliacao-produto/avaliacao-produto.module';

// Importações da sua branch
=======
>>>>>>> origin/dev
import { ProdutosModule } from './produtos/produtos.module';
import { ImagensProdutoModule } from './imagens-produto/imagens-produto.module';
import { ComentariosAvaliacaoModule } from './comentarios-avaliacao/comentarios-avaliacao.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LojasModule } from './lojas/lojas.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
<<<<<<< HEAD
    AvaliacaoProdutoModule,
=======
    PrismaModule, 
>>>>>>> origin/dev
    ProdutosModule,
    ImagensProdutoModule,
    ComentariosAvaliacaoModule,
    UsuariosModule, 
    LojasModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}