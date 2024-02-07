import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  SepareteLine,
  PageLinkCart
} from './styles'

export function Header() {
  const { userData, logout } = useUser()
  const { cartProducts, clearCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const logoutUser = () => {
    clearCart()
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() =>
            setTimeout(() => {
              navigate('/')
            }, 1000)
          }
          isActive={location.pathname === '/'}
        >
          <span>Home</span>
        </PageLink>
        <PageLink
          onClick={() =>
            setTimeout(() => {
              navigate('/produtos/0')
            }, 1000)
          }
          isActive={location.pathname.includes('produtos')}
        >
          <span>Ver produtos</span>
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={User} alt="logo-pessoa" />
        </PageLink>
        <SepareteLine />
        <PageLinkCart
          onClick={() =>
            setTimeout(() => {
              navigate('/carrinho')
            }, 1000)
          }
          cartCount={cartProducts.length}
        >
          <img src={Cart} alt="carrinho" />
        </PageLinkCart>

        <ContainerText>
          <p>Olá, {userData && userData.name}</p>
          <PageLink onClick={logoutUser}>
            <span>Sair</span>
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
