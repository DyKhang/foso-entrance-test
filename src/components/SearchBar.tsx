import Image from "next/image";

export const SearchBar = () => {
  return (
    <div className="p-[6px] bg-white/20 rounded-[8px] flex items-center h-[28px] w-[200px]">
      <Image
        src="./icons/search.svg"
        width={13}
        height={13}
        alt="search-icon"
      />
      <input
        type="text"
        placeholder="Tìm kiếm"
        className="text-[12px] text-[#FFFFFF] pl-[4px] outline-none flex-1"
      />
    </div>
  );
};
