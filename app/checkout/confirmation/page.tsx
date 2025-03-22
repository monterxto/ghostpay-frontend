"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getPaymentDetails } from "@/services/api";
import { ConfirmationSummary } from "@/components/organisms/ConfirmationSummary";
import { ConfirmationTemplate } from "@/components/templates/ConfirmationTemplate";
import { Identifier } from "@/components/molecules/Identifier";


export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const { data, isLoading } = useQuery({
    queryKey: ["payment", orderId],
    queryFn: () => getPaymentDetails(orderId!),
    enabled: !!orderId,
  });
  if (isLoading || !data) return <p>Carregando...</p>;

  return (
    <ConfirmationTemplate>
      <div className="max-w-md mx-auto">
        <ConfirmationSummary data={data} />
      </div>
      <div className="-mt-4 mb-1">
        <Identifier identifier={String(data.id_transacao)} />
      </div>
    </ConfirmationTemplate>
  );
}