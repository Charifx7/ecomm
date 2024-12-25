import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "Product 1",
        imageURL:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        quantity: 1,
        about: "test",
        status: "Available",
        price: 100,
      },
      {
        name: "Product 1",
        imageURL:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        quantity: 1,
        about: "test",
        status: "Available",
        price: 100,
      },
      {
        name: "Product 1",
        imageURL:
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
        quantity: 1,
        about: "test",
        status: "Available",
        price: 100,
      },
      
    ],
  }),
});
