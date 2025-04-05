import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: string;
};

export const AxisLabel: React.FC<Props> = ({ className, children }) => {
  return (
    <label className={cn("absolute text-[12px] text-[#667085]", className)}>
      {children}
    </label>
  );
};
