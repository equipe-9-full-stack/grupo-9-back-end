import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvaliacaoProdutoModule } from './avaliacao-produto/avaliacao-produto.module';

@Module({
  imports: [AvaliacaoProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
