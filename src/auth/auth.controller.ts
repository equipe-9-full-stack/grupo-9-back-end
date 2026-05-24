import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Rota 1: O Login (que já tínhamos feito)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dadosLogin: { email: string; senha: string }) {
    return this.authService.login(dadosLogin.email, dadosLogin.senha);
  }

  // Rota 2: O Cadastro (que o servidor não estava achando)
  @Post('cadastrar')
  cadastrar(@Body() dadosCadastro: { email: string; senha: string }) {
    return this.authService.cadastrar(dadosCadastro.email, dadosCadastro.senha);
  }
}