export type UsuarioDto = {
  id?: number;
  username: string;
  email: string;
  senha_hash: string;
  createdAt?: Date;
};