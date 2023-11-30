import React from 'react'

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
  const { userData } = useUser()
  const { cartProducts } = useCart()

  return (
    <Container>
      <ContainerLeft>
        <PageLink>
          <span>Home</span>
        </PageLink>
        <PageLink>Ver produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={User} alt="logo-pessoa" />
        </PageLink>
        <SepareteLine />
        <PageLinkCart cartCount={cartProducts.length}>
          <img src={Cart} alt="carrinho" />
        </PageLinkCart>

        <ContainerText>
          <p>Olá, {userData && userData.name}</p>
          <PageLink>
            <span>Sair</span>
          </PageLink>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
