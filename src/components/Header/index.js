import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import menu from '../../assets/menu.svg'
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
  const [dataIsMenu, setDataIsMenu] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const logoutUser = () => {
    clearCart()
    logout()
    navigate('/')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() =>
            setTimeout(() => {
              navigate('/home')
            }, 1000)
          }
          data-isactive={location.pathname.includes === '/'}
          data-menu={dataIsMenu}
        >
          <span className="hom">Home</span>
        </PageLink>
        <PageLink
          onClick={() =>
            setTimeout(() => {
              navigate('/produtos/0')
            }, 1000)
          }
          data-isactive={location.pathname.includes('produtos')}
          data-menu={dataIsMenu}
        >
          <span className="product">Ver produtos</span>
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink className="person">
          <img src={User} alt="logo-pessoa" />
        </PageLink>
        <SepareteLine />
        <PageLinkCart
          onClick={() =>
            setTimeout(() => {
              navigate('/carrinho')
            }, 1000)
          }
          data-cartcount={cartProducts.length}
        >
          <img src={Cart} alt="carrinho" />
        </PageLinkCart>

        <ContainerText data-menu={dataIsMenu}>
          <p>Olá, {userData && userData.name}</p>
          <PageLink onClick={logoutUser}>
            <span className="exit">Sair</span>
          </PageLink>
        </ContainerText>
      </ContainerRight>
      <img
        className="imgmenu"
        src={menu}
        alt="menu"
        onClick={() => setDataIsMenu(prevState => !prevState)}
      />
    </Container>
  )
}
