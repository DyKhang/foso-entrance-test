import Image from "next/image";

export const NoData = () => {
  return (
    <div className="flex items-center justify-center flex-1 flex-col">
      <Image alt="no-data" src="/no-data.svg" width={250} height={250} />
      <span className="mt-[24px] text-[24px] font-[500] text-[#52575E]">
        Chưa có dữ liệu
      </span>
    </div>
  );
};
