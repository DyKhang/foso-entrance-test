"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

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
    product: "_",
    plan: 0,
  },
  {
    product: "_",
    plan: 0,
  },
  {
    product: "_",
    plan: 0,
  },
  {
    product: "_",
    plan: 0,
  },
  {
    product: "_",
    plan: 100,
  },
];

export const EmptyPlanChart = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full mt-[24px] empty-chart"
    >
      <BarChart accessibilityLayer data={placeholders}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis
          dataKey="product"
          tickLine={false}
          tickMargin={5}
          axisLine={false}
        />
        <YAxis tickLine={false} tickMargin={12} axisLine={false} />
        <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />
        <Bar dataKey="plan" fill="var(--color-plan)" radius={4} barSize={20} />
        <Bar
          dataKey="actual"
          fill="var(--color-actual)"
          radius={4}
          barSize={20}
        />
      </BarChart>
    </ChartContainer>
  );
};
