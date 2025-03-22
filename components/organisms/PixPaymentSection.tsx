import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { QRCode } from "../atoms/QRCode";
import { formatCurrency } from "@/utils/formatCurrency";
import copy from "@/assets/copy.svg";

interface PixPaymentSectionProps {
  qrCode: string;
  deadline: string;
  amount: number;
  buyerName: string;
  onCopy: () => void;
}

export const PixPaymentSection = ({
  qrCode,
  deadline,
  amount,
  buyerName,
  onCopy,
}: PixPaymentSectionProps) => {
  const formattedDeadline = new Date(deadline).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  return (
    <div className="space-y-5">
      <div className="text-center">
        <strong className="text-2xl">
          {buyerName}, faça o pagamento de <br/>{formatCurrency(amount)} pelo Pix
        </strong>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <div className="size-87.5 border-2 border-selected-card-border rounded-[10px] mx-auto flex items-center justify-center">
          <QRCode base64={qrCode} size={360} />
        </div>

        <Button
          onClick={onCopy}
          className="flex gap-2.5 items-center text-white py-1.5 rounded cursor-pointer w-[86%] justify-center hover:bg-ghostpay-background-hover bg-ghostpay-background transition-colors"
        >
          <span>CLIQUE PARA COPIAR QR CODE</span>
          <Image src={copy} width={18} height={18} alt="Copy" />
        </Button>

        <div className="text-center">
          <p className="text-footer-text">Prazo de pagamento:</p>
          <span className="text-custom-text font-extrabold">{formattedDeadline}</span>
        </div>
      </div>

      <div>
        <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
        <div className="py-4.5 space-y-4">
          <div className="w-full flex items-center justify-between cursor-pointer">
            <strong>Como funciona?</strong>
            <Icon name="arrow-down" className="w-[14px] h-[14px]" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="bg-ghostpay-background px-4 w-fit rounded-lg">
                <span className="uppercase text-white">Passo 1</span>
              </div>
              <p>Abra o app do seu banco e entre no ambiente Pix;</p>
            </div>
            <div className="space-y-2">
              <div className="bg-ghostpay-background px-4 w-fit rounded">
                <span className="uppercase text-white">Passo 2</span>
              </div>
              <p>
                Escolha Pagar com QR Code e aponte a câmera para o código acima,
                ou cole o código identificador da transação;
              </p>
            </div>
            <div className="space-y-2">
              <div className="bg-ghostpay-background px-4 w-fit rounded">
                <span className="uppercase text-white">Passo 3</span>
              </div>
              <p>Confirme as informações e finalize sua compra.</p>
            </div>
          </div>
        </div>
        <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
      </div>
    </div>
  );
};