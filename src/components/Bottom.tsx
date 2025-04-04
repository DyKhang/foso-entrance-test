import { Materials } from "@/components/Materials";
import { ProductProgress } from "@/components/ProductProgress";
import { ProductStatus } from "@/components/ProductStatus";

export const Bottom = () => {
  return (
    <div className="grid grid-cols-3 gap-[24px]">
      <ProductStatus />
      <ProductProgress />
      <Materials />
    </div>
  );
};
