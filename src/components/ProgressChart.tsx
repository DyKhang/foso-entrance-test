type Props = {
  productName?: string;
  quantity?: number;
  percentage?: number;
  isEmpty?: boolean;
};

export const ProgressChart: React.FC<Props> = ({
  percentage,
  productName,
  quantity,
  isEmpty,
}) => {
  if (isEmpty)
    return (
      <div>
        <div className="flex items-center justify-between text-[14px]">
          <span className="font-[500]">Chưa có mặt hàng</span>
          <span className="font-[600]">-</span>
        </div>

        <div className="h-[8px] bg-[#f0f0f0] relative rounded-full mt-[8px]"></div>
      </div>
    );

  return (
    <div>
      <div className="flex items-center justify-between text-[14px]">
        <span className="font-[500]">{productName}</span>
        <div className="flex items-center gap-[2px]">
          <span className="font-[600]">{quantity} cái</span>
          <span className="text-[#637381]">({percentage}%)</span>
        </div>
      </div>

      <div className="h-[8px] bg-[#f0f0f0] relative rounded-full mt-[8px]">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="bg-[#1FC583] absolute left-0 h-full rounded-full transition-[width] duration-100"
        ></div>
      </div>
    </div>
  );
};
