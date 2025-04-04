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
import { plans } from "@/lib/mock-datas";

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
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-full mt-[24px]"
    >
      <BarChart accessibilityLayer data={plans}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis
          dataKey="product"
          tickLine={false}
          tickMargin={12}
          axisLine={false}
          label={{
            value: "Mặt hàng",
            position: "insideBottomRight",
            dy: 0,
            dx: -590,
          }}
        />
        <YAxis
          tickLine={false}
          tickMargin={12}
          axisLine={false}
          label={{
            value: "Cái",
            position: "insideBottomRight",
            dy: -320,
            dx: -10,
          }}
          tickCount={6}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
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
