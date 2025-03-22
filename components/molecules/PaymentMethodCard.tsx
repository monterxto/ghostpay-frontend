import React from "react";
import { cn } from "@/lib/utils";

interface Installment {
  times: number;
  value: number;
  total: number;
}

interface PaymentMethodCardProps {
  type: "pix" | "credit_card";
  selected: boolean;
  amount: number;
  discount?: number;
  installments?: Installment[];
  onSelect: (type: "pix" | "credit_card") => void;
}

export const PaymentMethodCard = ({
  type,
  selected,
  amount,
  discount,
  installments,
  onSelect,
}: PaymentMethodCardProps) => {
  const formatCurrency = (value: number) => {
    return `R$ ${value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div
      className={cn(
        "relative w-full rounded-[10px] border-2 p-5 transition-all",
        selected && type === "pix" && "border-selected-card-border bg-selected-card-background",
        selected && type === "credit_card" && "border-selected-card-border bg-selected-card-background",
      )}
    >
      <div className="absolute -top-3 left-4 px-5 bg-custom-gray rounded-full z-10">
        <span className="text-custom-text text-lg font-extrabold">
          {type === "pix" ? "Pix" : "Cartão de Credito"}
        </span>
      </div>

      <div className="space-y-2">
        {type === "credit_card" ? (
          <div className="mt-4">
            {installments && installments.map((installment, index) => (
              <div key={index} className={`flex flex-col justify-center `}>
                <div className="flex justify-between items-center">
                  <label htmlFor={`payment-${type}`} className="text-custom-text text-2xl font-extrabold">
                    {installment.times}x <span className="font-semibold">{formatCurrency(installment.value)}</span>
                  </label>
                  <input
                    type="radio"
                    id={`installment-${installment.times}`}
                    name="payment-method"
                    className={cn(
                      "h-8 w-8 border-2 rounded-full appearance-none cursor-pointer",
                      "checked:bg-selected-card-radio checked:border-selected-card-radio",
                      "after:content-['✔'] after:text-white after:text-lg after:flex after:items-center after:justify-center"
                    )}
                    onChange={() => onSelect(type)}
                  />
                </div>
                <div className="text-total-installments font-semibold text-base">
                  Total: {formatCurrency(installment.total)}
                </div>
                <div className={cn(
                  index !== installments.length - 1 ? "my-4 border-b-2 -mx-5" : ""
                )}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <label htmlFor={`payment-${type}`} className="text-custom-text text-2xl font-extrabold">
                1x <span className="font-semibold">{formatCurrency(amount)}</span>
              </label>
              <input
                type="radio"
                id={`payment-${type}`}
                name="payment-method"
                className={cn(
                  "h-8 w-8 border-2 rounded-full appearance-none cursor-pointer",
                  "checked:bg-selected-card-radio checked:border-selected-card-radio",
                  "after:content-['✔'] after:text-white after:text-lg after:flex after:items-center after:justify-center"
                )}
                checked={selected}
                onChange={() => onSelect(type)}
              />
            </div>

            {type === "pix" && discount && (
              <div className="text-discount-text font-semibold">
                Ganhe {discount}% de desconto
              </div>
            )}
          </div>
        )}

        {type === "pix" && discount && (
          <div className="bg-ribbon-background text-white py-2 px-3 rounded-md relative">
            <div className="flex items-center">
              <span className="text-xl mr-2">🤑</span>
              <span className="text-base font-extrabold">R$ 300,00 de desconto no seu Pix</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};