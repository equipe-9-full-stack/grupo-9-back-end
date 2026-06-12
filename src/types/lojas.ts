export interface Loja {
  id: number;
  nome: string;
  endereco: string;
  descricao?: string;
  logo_url?: string;
  banner_url?: string;
  sticker_url?: string;
  createdAt?: string;
  updatedAt?: string;
  usuario_id: number;
  usuario?: {
    id: number;
    nome: string;
    email: string;
  };
}