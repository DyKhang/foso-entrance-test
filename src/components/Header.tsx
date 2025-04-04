import { HeaderCtas } from "@/components/HeaderCtas";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";

export const Header = () => {
  return (
    <header className="bg-[#003DA0] pr-[48px] pl-[48px] pt-[16px] pb-[16px] flex items-center">
      <div className="flex items-center gap-[24px]">
        <Logo />
        <Navbar />
      </div>

      <div className="ml-auto">
        <HeaderCtas />
      </div>
    </header>
  );
};
