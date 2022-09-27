export const navigation = [
  { name: "Coffee" },
  { name: "Tea" },
  {
    name: "Menu",
    children: [
      { title: "All" },
      {
        title: "Cà phê",
        items: [{ name: "Cà phê Việt Nam" }, { name: "Cà phê máy" }],
      },
      {
        title: "Trà",
        items: [{ name: "Trà trái cây" }, { name: "Trà sữa" }],
      },
    ],
  },
  { name: "Story" },
];

export const footer = [
  {
    title: "Giới thiệu",
    labels: [
      { name: "Về chúng tôi" },
      { name: "Sản phẩm" },
      { name: "Cửa hàng" },
      { name: "Chuyện cà phê" },
    ],
  },
  {
    title: "Điều khoản",
    labels: [{ name: "Điều khoản sử dụng" }, { name: "Quy tắc bảo mật" }],
  },
];

export const contact = {
  phoneNumber: "1800 6936",
  address:
    "Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15 ,Q.Bình Thạnh, TP.Hồ Chí Minh",
  social: {
    facebook: {
      src: "https://www.facebook.com/The.Coffee.House.2014/",
    },
    instagram: {
      src: "https://www.instagram.com/thecoffeehousevn/",
    },
  },
};
