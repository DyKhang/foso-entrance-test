"use client";

import { Plan } from "@/components/Plan";
import { Tops } from "@/components/Tops";

export const Middle = () => {
  return (
    <div className="grid grid-cols-2 gap-[24px]">
      <Plan />
      <Tops />
    </div>
  );
};
