import { formatCurrency } from "@/utils/formatCurrency";
import { PaymentDetails } from "@/types/api";

interface ConfirmationSummaryProps {
  data: PaymentDetails;
}

export const ConfirmationSummary = ({ data }: ConfirmationSummaryProps) => {
  return (
    <div className="space-y-10 max-w-md mx-auto py-10">
      <div className="relative border-2 border-custom-gray rounded-[10px]">
        <div className="absolute left-4 -top-5 bg-custom-gray border-2 border-white px-4 py-1 rounded-full">
          <span className="text-custom-text text-lg font-extrabold">Informações comprador</span>
        </div>
        <div className="px-4 pt-10 pb-8 space-y-4">
          <dl className="flex justify-between">
            <dt className="text-footer-text">Nome comprador</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.nome}</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-footer-text">E-mail comprador</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.email}</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-footer-text">Telefone comprador</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.telefone}</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-footer-text">CPF comprador</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.cpf}</dd>
          </dl>
        </div>
      </div>
      <div className="relative border-2 border-custom-gray">
        <div className="absolute left-4 -top-5 bg-custom-gray border-2 border-white px-4 py-1 rounded-full">
          <span className="text-custom-text text-lg font-extrabold">Informações pagamento</span>
        </div>
        <div className="px-4 pt-10 pb-8 space-y-4">
          <dl className="flex justify-between">
            <dt className="text-footer-text">Método de Pagamento</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.metodo_pagamento === "PIX" ? "Pix" : "Cartão de Crédito"}</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-footer-text">Parcelas</dt>
            <dd className="text-custom-text font-extrabold text-base">{data.parcelas}x</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-footer-text">Sub total</dt>
            <dd className="text-custom-text font-extrabold text-base">{formatCurrency(data.valor_total / 100)}</dd>
          </dl>
          <dl className="flex justify-between">
            <dt className="text-ghostpay-text-cherry">Total</dt>
            <dd className="text-ghostpay-text-cherry font-extrabold text-base">{formatCurrency(data.valor_total / 100)}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};