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

export interface AvaliacaoLoja {
  id: number;
  usuario_id: number;
  loja_id: number;
  nota: number;
  comentario?: string;
  usuario?: {
    nome: string;
    foto?: string;
  };
  loja?: Loja;
}