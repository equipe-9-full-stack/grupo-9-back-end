import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, senhaDigitada: string) {
    // 1. Buscar o usuário no banco de dados pelo e-mail
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
    });

    // Se não achar o usuário pelo e-mail, barra o acesso
    if (!usuario) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }

    // 2. Comparar a senha digitada com a senha embaralhada (hash) do banco
    const senhaValida = await bcrypt.compare(senhaDigitada, usuario.senha_hash);

    if (!senhaValida) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }

    // 3. Se as senhas baterem, fabrica o Token JWT (Crachá VIP)
    const payload = { sub: usuario.id, email: usuario.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  // Adicione isso dentro da classe AuthService, depois do método login:
  
  async cadastrar(email: string, senhaDigitada: string) {
    // 1. Embaralha (criptografa) a senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(senhaDigitada, 10);

    // 2. Cria o usuário no banco de dados
    return this.prisma.usuario.create({
      data: {
        email: email,
        senha_hash: senhaCriptografada,
        username: "maria_nova",
        
       
      },
    });
  }
}