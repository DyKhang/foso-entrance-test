type Props = {
  quantity: number;
  status: string;
  color: string;
};

export const PieChartLegend: React.FC<Props> = ({
  quantity,
  status,
  color,
}) => {
  return (
    <div className="border border-[#DDDDE2] rounded-[8px] flex flex-col gap-[4px] p-[8px]">
      <span style={{ color }} className={`font-[600] text-[20px]`}>
        {quantity}
      </span>
      <span className="text-[12px]">{status}</span>
    </div>
  );
};
