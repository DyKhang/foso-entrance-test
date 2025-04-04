import { Box } from "@/components/Box";
import { Filter } from "@/components/Filter";
import { Table } from "@/components/Table";

export const Materials = () => {
  return (
    <Box className="p-0 h-[586px] flex flex-col pb-[15px] pr-[10px] relative">
      <>
        <div className="p-[24px]">
          <Filter filterName="Tuần này" titleName="Nguyên vật liệu cần mua" />
        </div>

        <Table />
      </>
    </Box>
  );
};
