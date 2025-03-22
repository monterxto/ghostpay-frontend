"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { PixPaymentSection } from "@/components/organisms/PixPaymentSection";
import { PixPaymentTemplate } from "@/components/templates/PixPaymentTemplate";
import { approvePayment, getCheckoutDetails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { Identifier } from "@/components/molecules/Identifier";

export default function PixPaymentPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const router = useRouter();

  const { data: checkoutData, isLoading } = useQuery({
    queryKey: ["checkout", orderId],
    queryFn: () => getCheckoutDetails(orderId!),
    enabled: !!orderId,
  });

  if (!checkoutData) return <p>Carregando...</p>;

  const handleCopy = () => {
    navigator.clipboard.writeText(checkoutData.pix_code);
    alert("Código copiado!");
  };

  const handleApprove = async () => {
    try {
      await approvePayment(String(checkoutData.id_transacao));
      router.push(`/checkout/confirmation?orderId=${checkoutData.id_transacao}`);
    } catch (error) {
      console.error("Erro ao aprovar pagamento:", error);
      alert("Erro ao aprovar o pagamento. Tente novamente.");
    }
  };

  return (
    <PixPaymentTemplate>
      <div className="max-w-md mx-auto">
        <PixPaymentSection
          qrCode={checkoutData.pix_qr_code}
          deadline={checkoutData.prazo_pagamento}
          amount={checkoutData.valor}
          buyerName={checkoutData.nome_cliente}
          onCopy={handleCopy}
        />
        <Button
          onClick={handleApprove}
          className="mt-4 w-full text-white py-2 px-4 rounded bg-next-button-background hover:bg-next-button-background-hover transition-colors"
        >
          Simular Aprovação
        </Button>
      </div>
      <div className="mt-4 -mb-4">
        <Identifier identifier={String(checkoutData.id_transacao)} />
      </div>
    </PixPaymentTemplate>
  );
}