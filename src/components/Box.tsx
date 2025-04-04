import { cn } from "@/lib/utils";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  className?: string;
};

export const Box: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={cn("p-[24px] box-shadow rounded-2xl bg-white", className)}
    >
      {children}
    </section>
  );
};
