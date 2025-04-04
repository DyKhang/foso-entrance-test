import Link from "next/link";

const items = [
  "Danh mục",
  "Bán & Xuất hàng",
  "Mua & Nhập hàng",
  "Kho & Sản xuất",
  "Kế toán",
  "Báo cáo & Thống kê",
  "Tiện ích",
];

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <Link
            key={item}
            href="#!"
            className="px-[12px] py-[4px] text-[#F3F4F6] text-[14px]"
          >
            {item}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
