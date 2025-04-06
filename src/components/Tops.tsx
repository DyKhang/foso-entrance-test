"use client";

import { Box } from "@/components/Box";
import { EmptyTopsChart } from "@/components/EmptyTopsChart";
import { Filter } from "@/components/Filter";
import { TopsChart } from "@/components/TopsChart";
import { useData } from "@/hooks/useData";

export const Tops = () => {
  const { tops } = useData();

  return (
    <Box className="space-y-[24px]">
      <>
        <Filter
          filterName="Năm nay"
          titleName="Top 5 khách hàng có sản lượng nhiều nhất"
        />

        {!tops.length ? <EmptyTopsChart /> : <TopsChart />}
      </>
    </Box>
  );
};
