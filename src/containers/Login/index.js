import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import CodeburgerLogo from '../../assets/codeburger-logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import apiCodeburger from '../../services/api'
import {
  Container,
  BackgroundLogin,
  ContainerItens,
  Input,
  Label,
  SignInLink
} from './styles'

export function Login() {
  const { putUserData } = useUser()
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    try {
      const { data, status } = await apiCodeburger.post(
        'sessions',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Seja bem-vindo', {
          position: 'top-right',
          theme: 'colored'
        })
      } else if (status === 401) {
        toast.error('Verifique seu e-mail e senha')
        return
      } else {
        throw new Error()
      }

      putUserData(data)
      setTimeout(() => {
        if (data.admin) {
          navigate('/pedidos')
        } else {
          navigate('/home')
        }
      }, 1000)
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <BackgroundLogin />
      <ContainerItens>
        <img src={CodeburgerLogo} alt="Login-Image" />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 55, marginBottom: 25 }}>
            Sign In
          </Button>
        </form>
        <SignInLink>
          Não possui conta? <Link to="/cadastro">Sign Up</Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
