import { Box } from "@/components/Box";
import { calPercent } from "@/lib/utils";
import { Barlow } from "next/font/google";
import Image from "next/image";

const font = Barlow({
  subsets: ["latin", "vietnamese"],
  weight: ["700"],
});

type Props = {
  data: {
    id: string;
    productName: string;
    currentMonth: {
      quantity: number;
    };
    previousMonth: {
      quantity: number;
    };
  };
};

export const Statistic: React.FC<Props> = ({ data }) => {
  if (data.productName === "Không có dữ liệu")
    return (
      <Box className="h-[116px]">
        <>
          <div
            className={`text-[#0375F3] text-[32px] font-[700] ${font.className}`}
          >
            0
          </div>
          <div className="text-[14px]">Chưa có mặt hàng</div>
        </>
      </Box>
    );

  const percent = calPercent(
    data.currentMonth.quantity,
    data.previousMonth.quantity
  );

  return (
    <Box className="h-[116px] relative">
      <>
        <div
          className={`text-[#0375F3] text-[32px] font-[700] ${font.className}`}
        >
          {data.currentMonth.quantity}
        </div>
        <div className="text-[14px]">{data.productName}</div>

        {percent !== 0 && (
          <div className="absolute top-[24px] right-[24px] flex items-center gap-[4px]">
            <Image
              alt="uptrend-icon"
              src={`/icons/${percent < 0 ? "downtrend" : "uptrend"}.svg`}
              width={24}
              height={24}
            />
            <span className="text-[14px] font-[500]">{`${Math.abs(
              percent
            )}%`}</span>
          </div>
        )}
      </>
    </Box>
  );
};
