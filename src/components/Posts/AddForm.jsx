import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/posts/postSlice";
import { nanoid } from "nanoid";

const AddForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    dispatch(
      addPost({ id: nanoid(), ...data, author: "Olexsander Sergienko" })
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
