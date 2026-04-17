"use client";
import Image from "next/image";

interface LotusMarkProps {
  width?: number;
  onDark?: boolean;
}

export function LotusMark({ width = 160, onDark = false }: LotusMarkProps) {
  return (
    <Image
      src="/Lotus_Master_Logo.png"
      alt="Lotus Company"
      width={width}
      height={Math.round(width * 0.28)}
      style={{
        objectFit: "contain",
        filter: onDark ? "brightness(0) invert(1)" : undefined,
      }}
      priority
    />
  );
}
