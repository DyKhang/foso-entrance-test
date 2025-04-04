import Image from "next/image";

type Props = {
  data: {
    id: string;
    name: string;
    code: string;
    unit: string;
    quantity: number;
  };
  index: number;
};

export const TableItem: React.FC<Props> = ({ data, index }) => {
  return (
    <div className="table-layout p-[20px] items-center border-b border-[#F3F3F4]">
      <span className="text-center font-[600]">{index}</span>
      <div className="flex gap-[8px] items-start">
        <Image
          alt="material-icon"
          src="/icons/material.svg"
          width={32}
          height={32}
        />

        <div className="flex flex-col gap-[4px]">
          <span className="text-[14px] font-[600]">{data.name}</span>
          <span className="text-[10px] text-[#667085]">(none)</span>
          <span className="text-[#3276FA] text-[10px]">{data.code}</span>
        </div>
      </div>
      <span className="text-[14px] font-[600]">{data.unit}</span>
      <span className="text-center text-[14px] font-[600]">
        {data.quantity}
      </span>
    </div>
  );
};
