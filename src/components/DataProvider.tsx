"use client";

import { createContext, ReactElement, useState } from "react";
import {
  materials,
  plans,
  productStatus,
  progress,
  statistics,
  tops,
} from "@/lib/mock-datas";

type DataContextType = {
  statistics: {
    id: string;
    productName: string;
    currentMonth: {
      quantity: number;
    };
    previousMonth: {
      quantity: number;
    };
  }[];
  materials: {
    id: string;
    name: string;
    code: string;
    unit: string;
    quantity: number;
  }[];
  plans: {
    product: string;
    plan: number;
    actual: number;
    id: string;
  }[];
  tops: {
    company: string;
    quantity: number;
  }[];
  productStatus: {
    status: string;
    quantity: number;
    fill: string;
  }[];
  progress: {
    id: number;
    product: string;
    quantity: number;
    percentage: number;
  }[];
  turnOnData(): void;
  turnOffData(): void;
};

export const DataContext = createContext<DataContextType | null>(null);

type Props = {
  children: ReactElement;
};

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [materialsState, setMaterials] = useState(materials);
  const [progressState, setProgress] = useState(progress);
  const [productStatusState, setProductStatus] = useState(productStatus);
  const [statisticsState, setStatistics] = useState(statistics);
  const [topsState, setTops] = useState(tops);
  const [plansState, setPlans] = useState(plans);

  function turnOnData() {
    setMaterials(materials);
    setProgress(progress);
    setProductStatus(productStatus);
    setStatistics(statistics);
    setTops(tops);
    setPlans(plans);
  }

  function turnOffData() {
    setMaterials([]);
    setPlans([]);
    setProductStatus([]);
    setProgress([]);
    setStatistics([]);
    setTops([]);
  }

  return (
    <DataContext.Provider
      value={{
        materials: materialsState,
        progress: progressState,
        plans: plansState,
        productStatus: productStatusState,
        statistics: statisticsState,
        tops: topsState,
        turnOffData,
        turnOnData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
