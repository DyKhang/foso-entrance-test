import { NoData } from "@/components/NoData";
import { TableItem } from "@/components/TableItem";
import { useData } from "@/hooks/useData";

export const Table = () => {
  const { materials } = useData();
  return (
    <>
      <div className="table-layout py-[16px] px-[20px] bg-slate-500/10 text-[#52575E] text-[12px] font-[600] w-full absolute left-0 top-[89.6px]">
        <span className="text-center">STT</span>
        <span>Nguyên vật liệu</span>
        <span className="translate-x-[-10px]">Đơn vị tính</span>
        <span className="text-center">Số lượng</span>
      </div>

      {!materials.length ? (
        <NoData />
      ) : (
        <div className="flex-1 overflow-y-scroll mt-[53px]">
          {materials.map((item, i) => (
            <TableItem key={i} index={i + 1} data={item} />
          ))}
        </div>
      )}
    </>
  );
};
