import { Filter } from "@/components/Filter";
import { Statistic } from "@/components/Statistic";
import { statistics } from "@/lib/mock-datas";

export const Statistics = () => {
  return (
    <section>
      <Filter
        filterName="Tháng này"
        titleName="Top sản phẩm sản xuất nhiều nhất"
      />

      <div className="grid grid-cols-5 mt-[22px] gap-[24px]">
        {statistics.map((item) => (
          <Statistic key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
