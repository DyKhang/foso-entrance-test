import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";

const icons = ["settings", "shapes", "message", "bell", "question"];

export const HeaderCTA = () => {
  return (
    <div className="flex items-center gap-[24px]">
      <SearchBar />

      <div className="flex items-center gap-[16px]">
        {icons.map((icon) => (
          <div key={icon} className="cursor-pointer relative">
            <Image
              src={`/icons/${icon}.svg`}
              alt={`${icon}-icon`}
              width={20}
              height={20}
            />

            {icon === "bell" && (
              <div className="absolute top-[-4px] right-[-5px] size-[15px] text-[10px] text-white bg-[#EE1E1E] rounded-full flex items-center justify-center">
                1
              </div>
            )}
          </div>
        ))}
      </div>

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
    </div>
  );
};
