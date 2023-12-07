import React, { Component } from "react";
import { Products } from "./components/Products/Products.jsx";
// const exampleData = {
// 	id: 1,
// 	title: 'iPhone 9',
// 	description: 'An apple mobile which is nothing like apple',
// 	price: 549,
// 	thumbnail: '...',
// }
//Plan
// 1. Роздивитись апі 'https://dummyjson.com/products'
// 2. Створити компоненти для відображення розмітки( мінімальні параметри)
//      --- Компонент Products
//      --- Компонент Card
// 3. Створити папку services і файл api.js
//      --- Встановити axios
//      --- Створити baseUrl
//      --- Додати функцію для запиту
// 4. Створити стейт для даних
//      --- Додати products, loading, error, skip, limit
// 5. Виконати запит за даними
//      --- Додати componentDidMount
// 6. Додати кнопку load more і реалізувати її логіку
//      --- Додати функцію для зміни skip
//      --- Додати componentDidUpdate для реагування на skip
//
const products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
  },
];
export class App extends Component {
  render() {
    return (
      <div>
        <Products products={products} />
      </div>
    );
  }
}
