"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { AxisLabel } from "@/components/AxisLabel";

const chartConfig = {
  quantity: {
    label: "Sản lượng",
    color: "transparent",
  },
} satisfies ChartConfig;

export const placeholders = [
  {
    company: "-",
    quantity: 3200,
  },
  {
    company: "-",
    quantity: 0,
  },
  {
    company: "-",
    quantity: 0,
  },
  {
    company: "-",
    quantity: 0,
  },
  {
    company: "-",
    quantity: 0,
  },
];

export function EmptyTopsChart() {
  return (
    <div className="relative pt-[18px]">
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={placeholders}
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
