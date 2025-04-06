import { Box } from "@/components/Box";
import { Filter } from "@/components/Filter";
import { ProgressChart } from "@/components/ProgressChart";
import { useData } from "@/hooks/useData";

export const ProductProgress = () => {
  const { progress } = useData();

  return (
    <Box className="h-[586px] flex flex-col gap-[24px] p-0 pb-[24px] pr-[10px]">
      <>
        <div className="p-[24px] pr-[14px]">
          <Filter
            filterName="Hoàn thành"
            titleName="Tiến độ sản xuất theo nhóm"
          />
        </div>

        <div className="flex-1 overflow-y-scroll space-y-[32px] px-[24px]">
          {progress.length
            ? progress.map((data) => (
                <ProgressChart
                  key={data.id}
                  percentage={data.percentage}
                  productName={data.product}
                  quantity={data.quantity}
                />
              ))
            : Array.from({ length: 7 }).map((_, i) => (
                <ProgressChart key={i} isEmpty />
              ))}
        </div>
      </>
    </Box>
  );
};
