export interface CheckoutResponse {
  id_transacao: number;
  valor: number;
  pix_qr_code: string;
  pix_code: string;
  status: string;
  prazo_pagamento: string;
}

export interface PaymentDetails {
  status: string,
  nome: string,
  email: string,
  telefone: string,
  cpf: string,
  valor_total: number,
  valor_pago: number,
  metodo_pagamento: string,
  parcelas: number,
  id_transacao: string
}