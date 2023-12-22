import React from "react";
import AddForm from "./AddForm";
import AuthAuthor from "./AuthAuthor";
import PostList from "./PostList";
// План
// - Розбити по компонентам розмітку
// - Додати слайс для постів
// - Додати слайс для юзера
// - Зробити функціонал додавання даних
// - Видалення поста
// - Редагування

export const Posts = () => {
  return (
    <div>
      {/* Форма додавання поста */}
      <AddForm />
      {/* Поле для авторизації автора */}
      <AuthAuthor />
      {/* Пости з даними */}
      <PostList />
    </div>
  );
};
