import { Box } from "@/components/Box";
import { EmptyProductStatusChart } from "@/components/EmptyProductStatusChart";
import { Filter } from "@/components/Filter";
import { ProductStatusChart } from "@/components/ProductStatusChart";
import { productStatus } from "@/lib/mock-datas";

export const ProductStatus = () => {
  return (
    <Box className="h-[586px] flex flex-col">
      <>
        <Filter filterName="Hôm nay" titleName="Tình hình sản xuất" />

        {!productStatus.length ? (
          <EmptyProductStatusChart />
        ) : (
          <ProductStatusChart />
        )}
      </>
    </Box>
  );
};
