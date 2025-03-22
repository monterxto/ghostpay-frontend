import { ReactNode } from "react";
import "../styles/globals.css";
import QueryProvider from "./QueryProvider";
import Image from "next/image";
import ghostPayLogo from "@/assets/ghostpay-logo.svg";
import shield from "@/assets/shield.svg";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-nunito">
        <QueryProvider>
          <main>{children}</main>
          <footer className="p-4 text-center flex justify-center items-center gap-1">
          <Image src={shield} width={20} height={20} alt="Shield" />
            <span className="text-sm text-footer-text">Pagamento 100% seguro via:</span>
            <Image src={ghostPayLogo} width={20} height={20} alt="Ghostspay" />
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}