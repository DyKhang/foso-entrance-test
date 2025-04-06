"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useData } from "@/hooks/useData";

export function ChangeDataStatus() {
  const [position, setPosition] = React.useState("bottom");
  const { turnOffData, turnOnData } = useData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer">Thay đổi trạng thái dữ liệu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top" onClick={turnOnData}>
            Có dữ liệu
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" onClick={turnOffData}>
            Không có dữ liệu
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
