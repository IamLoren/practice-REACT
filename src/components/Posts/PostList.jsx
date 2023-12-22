import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/posts/postSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts.items);
  console.log(posts);

  const dispatch = useDispatch();

  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <p>{item.author}</p>
            <button onClick={() => dispatch(deletePost(item.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
