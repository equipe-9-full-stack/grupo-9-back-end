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
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProdutosModule,
    ImagensProdutoModule,
    ComentariosAvaliacaoModule,
    UsuariosModule,
    LojasModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}