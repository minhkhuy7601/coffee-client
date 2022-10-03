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

export const menu = [
  { title: "Tất cả", key: "tat-ca" },
  {
    title: "Cà phê",
    key: "ca-phe",
    items: [
      { name: "Cà phê Việt Nam", key: "ca-phe-viet-name" },
      { name: "Cà phê máy", key: "ca-phe-may" },
    ],
  },
  {
    title: "Trà",
    key: "tra",
    items: [
      { name: "Trà trái cây", key: "tra-trai-cay" },
      { name: "Trà sữa", key: "tra-sua" },
    ],
  },
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

export const articles = [
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
  {
    title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
    description:
      "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...",
    date: "11/03/2022",
    image: "/assets/article.webp",
  },
];

export const dataProducts = [
  {
    name: "CloudFee Creme Brulee Caramel",
    category: "Cà phê",
    categoryExtra: "Cà phê Việt Nam",
    price: 49000,
    size: [
      {
        name: "Vừa",
        increase: 0,
      },
      {
        name: "Lớn",
        increase: 10000,
      },
    ],
    images: ["/assets/coffee-1.webp", "/assets/coffee-1a.webp"],
    topping: [
      {
        name: "Kem phô mai macchiato",
        increase: 10000,
      },
      {
        name: "Shot Espresso",
        increase: 10000,
      },
    ],
    description:
      "CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.",
  },
  {
    name: "CloudFee Creme Brulee Caramel",
    category: "Cà phê",
    categoryExtra: "Cà phê máy",
    price: 49000,
    size: [
      {
        name: "Vừa",
        increase: 0,
      },
      {
        name: "Lớn",
        increase: 10000,
      },
    ],
    images: ["/assets/coffee-1.webp", "/assets/coffee-1a.webp"],
    topping: [
      {
        name: "Kem phô mai macchiato",
        increase: 10000,
      },
      {
        name: "Shot Espresso",
        increase: 10000,
      },
    ],
    description:
      "CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.",
  },
  {
    name: "CloudFee Creme Brulee Caramel",
    category: "Cà phê",
    categoryExtra: "Cà phê Việt Nam",
    price: 49000,
    size: [
      {
        name: "Vừa",
        increase: 0,
      },
      {
        name: "Lớn",
        increase: 10000,
      },
    ],
    images: ["/assets/coffee-1.webp", "/assets/coffee-1a.webp"],
    topping: [
      {
        name: "Kem phô mai macchiato",
        increase: 10000,
      },
      {
        name: "Shot Espresso",
        increase: 10000,
      },
    ],
    description:
      "CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.",
  },
  {
    name: "CloudFee Creme Brulee Caramel",
    category: "Trà",
    categoryExtra: "Trà trái cây",
    price: 49000,
    size: [
      {
        name: "Vừa",
        increase: 0,
      },
      {
        name: "Lớn",
        increase: 10000,
      },
    ],
    images: ["/assets/coffee-1.webp", "/assets/coffee-1a.webp"],
    topping: [
      {
        name: "Kem phô mai macchiato",
        increase: 10000,
      },
      {
        name: "Shot Espresso",
        increase: 10000,
      },
    ],
    description:
      "CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.",
  },
  {
    name: "CloudFee Creme Brulee Caramel",
    category: "Trà",
    categoryExtra: "Trà sữa",
    price: 49000,
    size: [
      {
        name: "Vừa",
        increase: 0,
      },
      {
        name: "Lớn",
        increase: 10000,
      },
    ],
    images: ["/assets/coffee-1.webp", "/assets/coffee-1a.webp"],
    topping: [
      {
        name: "Kem phô mai macchiato",
        increase: 10000,
      },
      {
        name: "Shot Espresso",
        increase: 10000,
      },
    ],
    description:
      "CloudFee Creme Brulee Caramel ngon khó cưỡng bởi lớp kem trứng Creme Brulee bồng bềnh béo mịn, ngọt thanh của Caramel, thêm xíu đắng nhẹ từ cà phê, kèm topping thạch cà phê dai dai giòn giòn.",
  },
];
