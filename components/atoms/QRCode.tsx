import Image from "next/image";

interface QRCodeProps {
  base64: string;
  size?: number;
  className?: string;
}

export const QRCode = ({ base64, size = 320, className = "" }: QRCodeProps) => (
  <Image
    src={base64}
    width={size}
    height={size}
    alt="QR Code Pix"
    className={className}
  />
);