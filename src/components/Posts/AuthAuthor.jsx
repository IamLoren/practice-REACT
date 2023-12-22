import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../redux/posts/authorSlice";

const AuthAuthor = () => {

  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()
  
  const submit = (data) => {
    dispatch(login(data.author))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('author', {required: true})} />
      <button>Login</button>
    </form>
  );
};

export default AuthAuthor;
