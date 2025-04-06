"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { AxisLabel } from "@/components/AxisLabel";
import { useData } from "@/hooks/useData";

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

export const PlanChart = () => {
  const { plans } = useData();

  return (
    <div className="relative">
      <ChartContainer config={chartConfig} className="w-full plan-chart">
        <BarChart accessibilityLayer data={plans} margin={{ left: 14 }}>
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
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} verticalAlign="top" />
          <Bar
            dataKey="plan"
            fill="var(--color-plan)"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="actual"
            fill="var(--color-actual)"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ChartContainer>
      <AxisLabel className="top-[16px] left-[37px]">Cái</AxisLabel>
      <AxisLabel className="bottom-0 left-[0]">Mặt hàng</AxisLabel>
    </div>
  );
};
