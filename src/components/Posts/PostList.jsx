import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/posts/postSlice";
import { selectAuthor, selectPosts } from "../../redux/selectors";

const PostList = () => {
  const posts = useSelector(selectPosts)
  const author = useSelector(selectAuthor)

  const dispatch = useDispatch();

  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <p>{item.author}</p>
            {author === item.author && <button onClick={() => dispatch(deletePost(item.id))}>
              Delete
            </button>}
            
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
