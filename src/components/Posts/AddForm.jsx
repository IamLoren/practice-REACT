import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/posts/postSlice";
import { nanoid } from "nanoid";
import { selectAuthor } from "../../redux/selectors";

const AddForm = () => {
  const dispatch = useDispatch();
  const author = useSelector(selectAuthor)

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    dispatch(
      addPost({ id: nanoid(), ...data, author})
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} />
      <textarea {...register("body", { required: true })} />
      <button>Add post</button>
    </form>
  );
};

export default AddForm;
