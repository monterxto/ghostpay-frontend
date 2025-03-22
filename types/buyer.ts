export interface Buyer {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  valor: number;
  metodo_pagamento: "pix" | "credit_card";
}