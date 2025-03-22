import { ReactNode } from "react";
import { HeaderPage } from "../molecules/HeaderPage";

interface PixPaymentTemplateProps {
  children: ReactNode;
}

export const PixPaymentTemplate = ({ children }: PixPaymentTemplateProps) => (
  <div className="min-h-screen bg-white p-5">
    <HeaderPage />
    {children}
  </div>
);