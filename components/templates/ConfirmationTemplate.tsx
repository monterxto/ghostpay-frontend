import { ReactNode } from "react";
import Image from "next/image";
import ghostPayLogo from "@/assets/ghostpay-logo.svg";
import { HeaderPage } from "../molecules/HeaderPage";

interface ConfirmationTemplateProps {
  children: ReactNode;
}

export const ConfirmationTemplate = ({ children }: ConfirmationTemplateProps) => (
  <div className="min-h-screen bg-white p-5">
    <HeaderPage />
    <div className="text-center py-10">
      <strong className="text-2xl font-extrabold">Agradecemos a sua compra.</strong>
      <p className="text-2xl font-extrabold">Pagamento aprovado com sucesso!</p>
    </div>
    {children}
  </div>
);