import { ReactNode } from "react";
import { HeaderPage } from "../molecules/HeaderPage";

interface CheckoutTemplateProps {
  children: ReactNode;
}

export const CheckoutTemplate = ({ children }: CheckoutTemplateProps) => (
  <div className="min-h-screen bg-white flex flex-col justify-center items-center">
    <div className="bg-header-frete text-white p-2 text-center text-sm font-medium min-w-md">
      FRETE GRÁTIS ACIMA DE 200 REAIS
    </div>
    <HeaderPage />
    <div className="p-4">
      {children}
    </div>
  </div>
);