"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { AxisLabel } from "@/components/AxisLabel";

const chartConfig = {
  plan: {
    label: "Kế hoạch",
    color: "#0375F3",
  },
  actual: {
    label: "Thực hiện",
    color: "#1FC583",
  },
} satisfies ChartConfig;

const placeholders = [
  {
    product: "-",
    plan: 0,
  },
  {
    product: "-",
    plan: 0,
  },
  {
    product: "-",
    plan: 0,
  },
  {
    product: "-",
    plan: 0,
  },
  {
    product: "-",
    plan: 100,
  },
];

export const EmptyPlanChart = () => {
  return (
    <div className="relative">
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full mt-[24px] empty-chart plan-chart"
      >
        <BarChart accessibilityLayer data={placeholders} margin={{ left: 14 }}>
          <CartesianGrid vertical={false} strokeDasharray="2 2" />
          <XAxis
            dataKey="product"
            tickLine={false}
            tickMargin={12}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tickMargin={12}
            axisLine={false}
            tickCount={6}
          />
          <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />
          <Bar
            dataKey="plan"
            fill="var(--color-plan)"
            radius={4}
            barSize={20}
          />
          <Bar
            dataKey="actual"
            fill="var(--color-actual)"
            radius={4}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
      <AxisLabel className="top-[16px] left-[18px]">Đơn vị</AxisLabel>
      <AxisLabel className="bottom-0 left-0">Mặt hàng</AxisLabel>
    </div>
  );
};
