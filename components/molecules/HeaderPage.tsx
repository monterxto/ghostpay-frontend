import Image from "next/image";
import ghostPayLogo from "@/assets/ghostpay-logo.svg";

export const HeaderPage = () => (
  <div className="flex gap-2 items-center justify-center py-10">
      <Image src={ghostPayLogo} width={48} height={48} alt="Ghostspay" />
      <strong className="text-header-text text-3xl">GhostsPay</strong>
  </div>
);