"use client";

import { ChangeDataStatus } from "@/components/ChangeDataStatus";
import { Filter } from "@/components/Filter";
import { Statistic } from "@/components/Statistic";
import { useData } from "@/hooks/useData";

export const Statistics = () => {
  const { statistics } = useData();

  return (
    <section>
      <Filter
        filterName="Tháng này"
        titleName="Top sản phẩm sản xuất nhiều nhất"
      />

      <ChangeDataStatus />

      <div className="grid grid-cols-5 mt-[22px] gap-[24px]">
        {statistics.length
          ? statistics.map((item) => <Statistic key={item.id} data={item} />)
          : Array.from({ length: 5 }).map((_, i) => (
              <Statistic
                key={i}
                data={{
                  currentMonth: { quantity: 0 },
                  id: "abc",
                  previousMonth: { quantity: 0 },
                  productName: "Không có dữ liệu",
                }}
              />
            ))}
      </div>
    </section>
  );
};
