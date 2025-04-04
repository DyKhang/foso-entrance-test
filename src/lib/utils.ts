import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function upperCaseFirstLetter(strs: string) {
  return strs
    .split(" ")
    .map((str) => {
      return str[0].toUpperCase() + str.slice(1);
    })
    .join(" ");
}

export function calPercent(curr: number, prev: number) {
  const rs = ((curr - prev) / prev) * 100;

  return Number(rs.toFixed(1));
}
