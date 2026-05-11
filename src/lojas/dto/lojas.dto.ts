export type LojaDto = {

  id?: number;
  nome: string;
  endereco: string;
  descricao?: string;
  logo_url?: string;
  banner_url?: string;
  sticker_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
  usuario_id: number;
  
};