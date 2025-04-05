"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { tops } from "@/lib/mock-datas";
import { AxisLabel } from "@/components/AxisLabel";

const chartConfig = {
  quantity: {
    label: "Sản lượng",
    color: "#0375F3",
  },
} satisfies ChartConfig;

export function TopsChart() {
  return (
    <div className="relative pt-[18px]">
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={tops}
          layout="vertical"
          margin={{
            left: -30,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis
            type="number"
            dataKey="quantity"
            tickCount={5}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: string) => {
              if (Number(value) >= 1000) {
                return value.toLocaleString();
              }

              return value;
            }}
          />
          <YAxis
            dataKey="company"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            width={150}
            tickFormatter={(value: string) => {
              if (value.length >= 30) {
                return value.slice(0, 27) + "...";
              }

              return value;
            }}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar
            dataKey="quantity"
            fill="var(--color-quantity)"
            radius={[0, 4, 4, 0]}
            barSize={8}
          />
        </BarChart>
      </ChartContainer>
      <AxisLabel className="top-0 left-[34px]">Khách hàng</AxisLabel>
      <AxisLabel className="bottom-[9px] left-[48px]">Sản lượng</AxisLabel>
    </div>
  );
}
