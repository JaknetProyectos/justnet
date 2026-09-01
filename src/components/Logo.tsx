import {
  Hexagon,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className = "h-14",
}: LogoProps) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logo.png"
        width={50}
        height={30}
        alt="logo"
        className="object-contain"
      />
      <Image
        src="/title.png"
        width={150}
        height={30}
        alt="tiele"
        className="object-contain"
      />

    </div>
  );
}