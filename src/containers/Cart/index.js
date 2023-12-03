import React from 'react'

import CartLogo from '../../assets/cartback.svg'
import { CartItems, CartResume, Header } from '../../components'
import { Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <Header />
      <img src={CartLogo} alt="logo" />

      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
