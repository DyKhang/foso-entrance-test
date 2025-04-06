import { Box } from "@/components/Box";
import { EmptyPlanChart } from "@/components/EmptyPlanChart";
import { Filter } from "@/components/Filter";
import { PlanChart } from "@/components/PlanChart";
import { useData } from "@/hooks/useData";

export const Plan = () => {
  const { plans } = useData();

  return (
    <Box className="space-y-[24px]">
      <>
        <Filter filterName="Quý này" titleName="Kế hoạch sản xuất" />

        {!plans.length ? <EmptyPlanChart /> : <PlanChart />}
      </>
    </Box>
  );
};
