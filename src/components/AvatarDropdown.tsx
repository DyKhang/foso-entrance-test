import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AvatarDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-[10px] cursor-pointer">
          <Image
            alt="logo"
            height={40}
            width={40}
            src="/logo.jpg"
            className="rounded-full"
          />

          <Image
            src="/icons/arrow-down.svg"
            alt="arrow-down-icon"
            width={10}
            height={10}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Dỹ Khang</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Thông tin</DropdownMenuItem>
        <DropdownMenuItem>Nhóm</DropdownMenuItem>
        <DropdownMenuItem>Đăng ký</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
