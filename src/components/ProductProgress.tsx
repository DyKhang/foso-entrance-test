import { Box } from "@/components/Box";
import { Filter } from "@/components/Filter";

export const ProductProgress = () => {
  return (
    <Box className="h-[586px]">
      <>
        <Filter
          filterName="Hoàn thành"
          titleName="Tiến độ sản xuất theo nhóm"
        />
      </>
    </Box>
  );
};
