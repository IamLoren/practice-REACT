import React from 'react'
import {Form, Label, SubmitButton} from './Registration.styled'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {registerThunk} from '../../redux/auth/operations'

function Registration() {
  const {register, handleSubmit, reset} = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    dispatch(registerThunk(data))
    reset()
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Name</span>
          <input {...register('name', {required: true})} placeholder="Enter name"/>
        </Label>
        <Label>
          <span>Email</span>
          <input {...register('email', {required: true})} type="email" placeholder="Enter email"/>
        </Label>
        <Label>
          <span>Password</span>
          <input {...register('password', {required: true})} type="password" placeholder="Enter password"/>
        </Label>
        <SubmitButton>Register</SubmitButton>
      </Form>
    </div>
  )
}

export default Registration