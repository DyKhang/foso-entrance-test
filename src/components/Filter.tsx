import { upperCaseFirstLetter } from "@/lib/utils";
import Image from "next/image";

type Props = {
  titleName: string;
  filterName: string;
};

export const Filter: React.FC<Props> = ({ filterName, titleName }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-[500]">{upperCaseFirstLetter(titleName)}</h2>

      <button className="flex items-center gap-[8px] py-[8px] px-[12px] border border-[#D0D5DD] rounded-[8px] cursor-pointer">
        <Image
          src="/icons/calendar.svg"
          alt="calendar-icon"
          width={12}
          height={12}
        />
        <span className="text-[#3A3E4C]">{filterName}</span>

        <Image
          alt="arrow-down-solid-icon"
          src="/icons/arrow-down-solid.svg"
          width={10}
          height={5}
        />
      </button>
    </div>
  );
};
