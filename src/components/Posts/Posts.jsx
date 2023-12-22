import React from "react";
import AddForm from "./AddForm";
import AuthAuthor from "./AuthAuthor";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/posts/authorSlice";
// План
// - Розбити по компонентам розмітку
// - Додати слайс для постів
// - Додати слайс для юзера
// - Зробити функціонал додавання даних
// - Видалення поста
// - Редагування

export const Posts = () => {
  const dispatch = useDispatch();
  const isLog = useSelector((state) => state.author.isOnline);

  return (
    <div>
      {/* Форма додавання поста */}
      <AddForm />
      {/* Поле для авторизації автора */}
      {!isLog ? (
        <AuthAuthor />
      ) : (
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Exit
        </button>
      )}

      {/* Пости з даними */}
      <PostList />
    </div>
  );
};
