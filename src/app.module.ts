import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importações da sua branch
import { ProdutosModule } from './produtos/produtos.module';
import { ImagensProdutoModule } from './imagens-produto/imagens-produto.module';
import { ComentariosAvaliacaoModule } from './comentarios-avaliacao/comentarios-avaliacao.module';
import { PrismaService } from './prisma/prisma.service';

// Importações da branch dev
import { UsuariosModule } from './usuarios/usuarios.module';
import { LojasModule } from './lojas/lojas.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProdutosModule,
    ImagensProdutoModule,
    ComentariosAvaliacaoModule,
    UsuariosModule,
    LojasModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, PrismaService, AuthService],
})
export class AppModule {}