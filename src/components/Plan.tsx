import { Box } from "@/components/Box";
import { EmptyPlanChart } from "@/components/EmptyPlanChart";
import { Filter } from "@/components/Filter";

import { PlanChart } from "@/components/PlanChart";
import { plans } from "@/lib/mock-datas";

export const Plan = () => {
  return (
    <Box className="space-y-[24px]">
      <>
        <Filter filterName="Quý này" titleName="Kế hoạch sản xuất" />

        {!plans.length ? <EmptyPlanChart /> : <PlanChart />}
      </>
    </Box>
  );
};
