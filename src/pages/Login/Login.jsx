import React from 'react'
import {Form, Label, SubmitButton} from "./Login.styled"
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {loginThunk} from '../../redux/auth/operations'

function Login() {
  const {register, handleSubmit, reset} = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(loginThunk(data))
    reset()
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Email</span>
          <input {...register('email', {required: true})} type="email" placeholder="Enter email"/>
        </Label>
        <Label>
          <span>Password</span>
          <input {...register('password', {required: true})} type="password" placeholder="Enter password"/>
        </Label>
        <SubmitButton>Log In</SubmitButton>
      </Form>
    </div>
  )
}

export default Login