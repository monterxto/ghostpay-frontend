"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createCheckout } from "@/services/api";
import { FormGroup } from "../molecules/FormGroup";
import { Button } from "../atoms/Button";
import { PaymentMethodCard } from "../molecules/PaymentMethodCard";

const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  cpf: z.string().length(11, "CPF deve ter 11 dígitos"),
  metodo_pagamento: z.enum(["pix", "credit_card"]),
});

type FormData = z.infer<typeof schema>;

export const CheckoutForm = () => {
  const router = useRouter();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { metodo_pagamento: "pix" },
  });

  const mutation = useMutation({
    mutationFn: createCheckout,
    onSuccess: (data) => {
      console.log("Checkout criado com sucesso:", data);
      if (watch("metodo_pagamento") === "pix") {
        const checkoutData = {
          ...data,
          buyerName: watch("nome"),
        };
        localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
        router.push(`/checkout/pix?orderId=${data.id_transacao}`);
      }
    },
    onError: (error) => {
      console.error("Erro ao criar checkout:", error);
    },
  });

  const installmentsData = [
    { times: 1, value: 30600, total: 30600 },
    { times: 2, value: 15300, total: 30650 },
  ];

  const totalValue = 30500;

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
    const dataToSend = { ...data, valor: totalValue };
    mutation.mutate(dataToSend);
  };

  const handleSelectMethod = (type: "pix" | "credit_card") => {
    console.log("Método de pagamento selecionado:", type);
    setValue("metodo_pagamento", type);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
      <FormGroup
        label="Digite seu nome"
        placeholder="Seu nome completo"
        {...register("nome")}
      />
      {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}

      <FormGroup
        label="Digite seu e-mail"
        placeholder="email@exemplo.com.br"
        {...register("email")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <FormGroup
        label="Digite seu telefone"
        placeholder="(00) 00000-0000"
        {...register("telefone")}
      />
      {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}

      <FormGroup
        label="Digite seu CPF"
        placeholder="000.000.000-00"
        {...register("cpf")}
      />
      {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}

      <div className="flex flex-col items-center gap-8">
        <h2 className="text-2xl text-custom-text font-extrabold">
          {`${watch("nome") || "João"}, como você quer pagar?`}
        </h2>
        <PaymentMethodCard
          type="pix"
          selected={watch("metodo_pagamento") === "pix"}
          amount={totalValue}
          discount={5}
          onSelect={handleSelectMethod}
          {...register("metodo_pagamento")}
        />
        <PaymentMethodCard
          type="credit_card"
          selected={watch("metodo_pagamento") === "credit_card"}
          amount={totalValue}
          installments={installmentsData}
          onSelect={handleSelectMethod}
          {...register("metodo_pagamento")}
        />
        {errors.metodo_pagamento && <p className="text-red-500">{errors.metodo_pagamento.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={mutation.isPending}
        className="bg-next-button-background hover:bg-next-button-background-hover py-2 px-4 text-white rounded w-full cursor-pointer transition-colors"
      >
        {mutation.isPending ? "Carregando..." : "Prosseguir"}
      </Button>
    </form>
  );
};