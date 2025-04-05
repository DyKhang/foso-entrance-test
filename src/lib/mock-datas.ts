// Top Sản Phẩm Sản Xuất Nhiều Nhất
export const statistics = [
  {
    id: "a1b2c3d4-e5f6-7890-ab12-cd34ef567890",
    productName: "Áo sơ mi dài tay",
    currentMonth: { quantity: 60 },
    previousMonth: { quantity: 55 },
  },
  {
    id: "b2c3d4e5-f678-9012-ab34-cd56ef789012",
    productName: "Quần tây",
    currentMonth: { quantity: 18 },
    previousMonth: { quantity: 19 },
  },
  {
    id: "c3d4e5f6-7890-1234-ab56-cd78ef901234",
    productName: "Áo hoodie",
    currentMonth: { quantity: 55 },
    previousMonth: { quantity: 47 },
  },
  {
    id: "d4e5f678-9012-3456-ab78-cd90ef123456",
    productName: "Không có dữ liệu",
    currentMonth: { quantity: 0 },
    previousMonth: { quantity: 0 },
  },
  {
    id: "e5f67890-1234-5678-ab90-cd12ef345678",
    productName: "Áo thun cổ tròn",
    currentMonth: { quantity: 48 },
    previousMonth: { quantity: 46 },
  },
];

// Nguyên Vật Liệu Cần Mua
export const materials = [
  {
    id: "1e8f5d7a-001a-4b2b-9a6c-14e2c5b8e7f1",
    name: "Chỉ cotton",
    code: "NVL_000014",
    unit: "Cuộn",
    quantity: 8,
  },
  {
    id: "2c9d7b6e-45df-4a89-8c3a-10f6b7c2d9e2",
    name: "Vải lụa",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "3a7b5f1d-89cd-4b28-91e6-27c5f3b9e8d4",
    name: "Vải lót",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "4d6f8e9b-23a4-4c57-9b6d-58e7f1c2a3d9",
    name: "Vải chống thấm",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "5b9c7d3f-12a8-4e5b-9d7f-30c4a1b6e8f2",
    name: "Vải nỉ",
    code: "NVL_000024",
    unit: "Mét",
    quantity: 8,
  },
  {
    id: "6c8d4e2a-98b1-4d6c-8e3f-42a5b6c7d8e3",
    name: "Khóa kéo",
    code: "NVL_000035",
    unit: "Cái",
    quantity: 20,
  },
  {
    id: "7e9f6b1c-54c2-4a7d-9f8e-63b7d8e4f5a1",
    name: "Nút áo",
    code: "NVL_000046",
    unit: "Cái",
    quantity: 50,
  },
  {
    id: "8a7c5d3e-21b9-4c8e-9a6f-74c8e5b6d9f3",
    name: "Dây thun",
    code: "NVL_000057",
    unit: "Mét",
    quantity: 15,
  },
  {
    id: "9b6e4f2d-30a7-4b9d-8c7e-85d9f1c2a3e4",
    name: "Mếch vải",
    code: "NVL_000068",
    unit: "Mét",
    quantity: 10,
  },
  {
    id: "10c7d5e3-41b8-4e9a-9d8f-96e0f2c3a4d5",
    name: "Ren",
    code: "NVL_000079",
    unit: "Mét",
    quantity: 25,
  },
  {
    id: "11d8e6f4-52c9-4f8b-8e7d-97f1c4a5b6d7",
    name: "Keo dán vải",
    code: "NVL_000080",
    unit: "Chai",
    quantity: 5,
  },
  {
    id: "12e9f7b5-63d0-4a7c-9f8e-88d2f3c4a5e6",
    name: "Móc cài",
    code: "NVL_000091",
    unit: "Cái",
    quantity: 100,
  },
  {
    id: "13a8c6d4-74e1-4b8d-8e7f-99d3f5c6a7b8",
    name: "Bông gòn",
    code: "NVL_000102",
    unit: "Kg",
    quantity: 3,
  },
  {
    id: "14b9d7e5-85f2-4c9e-9f8d-10e4f6c7a8d9",
    name: "Kim may",
    code: "NVL_000113",
    unit: "Hộp",
    quantity: 2,
  },
  {
    id: "15c8e6f4-96g3-4d0f-0f9e-11f5c7a8d9e0",
    name: "Thước may",
    code: "NVL_000124",
    unit: "Cái",
    quantity: 4,
  },
];

// Kế Hoạch Sản Xuất
export const plans = [
  {
    product: "Áo ba lỗ",
    plan: 60,
    actual: 40,
    id: "15c8e6f4-96g3-4d0f-0f9e-11f5c7a8d9e0",
  },
  {
    product: "Áo sơ mi",
    plan: 100,
    actual: 60,
    id: "2a9b7d1c-3e8f-4g5h-6i7j-8k9l0m1n2o3p",
  },
  {
    product: "Áo thun polo",
    plan: 80,
    actual: 20,
    id: "4b6c8d0e-2f4g-6h8i-0j2k-4l6m8n0o2p4q",
  },
  {
    product: "Quần baggy",
    plan: 70,
    actual: 45,
    id: "6c8d0e2f-4g6h-8i0j-2k4l-6m8n0o2p4q6r",
  },
  {
    product: "Quần jogger",
    plan: 90,
    actual: 60,
    id: "8d0e2f4g-6h8i-0j2k-4l6m-8n0o2p4q6r8s",
  },
];

// Top 5 khách hàng có sản lượng nhiều nhất
export const tops = [
  {
    company: "Công ty Dệt may Happy Polla",
    quantity: 3200,
  },
  {
    company: "Công ty May mặc Saigon trendy",
    quantity: 3000,
  },
  {
    company: "Outlet Lemon squeeze",
    quantity: 2900,
  },
  {
    company: "Shop quần áo streetwear New",
    quantity: 2900,
  },
  {
    company: "Shop thời trang công sở Basic Office",
    quantity: 2800,
  },
];
