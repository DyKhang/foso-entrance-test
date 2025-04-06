import { DataContext } from "@/components/DataProvider";
import { useContext } from "react";

export const useData = () => {
  return useContext(DataContext)!;
};
