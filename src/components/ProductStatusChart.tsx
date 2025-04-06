"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChartLegend } from "@/components/PieChartLegend";
import { productStatus } from "@/lib/mock-datas";

const chartConfig = {
  notDone: {
    label: "Chưa hoàn thành",
    color: "#FF8F0D",
  },
  inProgress: {
    label: "Đang sản xuất",
    color: "#0375F3",
  },
  done: {
    label: "Hoàn thành",
    color: "#1FC583",
  },
} satisfies ChartConfig;

export function ProductStatusChart() {
  const total = React.useMemo(() => {
    return productStatus.reduce((acc, curr) => acc + curr.quantity, 0);
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center flex-col relative">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px] w-full"
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Pie
            data={productStatus}
            dataKey="quantity"
            nameKey="status"
            innerRadius={82}
            strokeWidth={5}
            paddingAngle={2}
            cornerRadius={14}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-[36px] font-[600]"
                      >
                        {total.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground text-[16px]"
                      >
                        Lệnh sản xuất
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="grid grid-cols-3 gap-[8px] absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        {productStatus.map((data, index) => (
          <PieChartLegend
            key={index}
            quantity={data.quantity}
            status={data.status}
            color={data.fill}
          />
        ))}
      </div>
    </div>
  );
}
