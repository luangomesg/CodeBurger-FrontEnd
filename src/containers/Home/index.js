import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarrossel, OffersCarrossel, Header } from '../../components'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <img src={HomeLogo} alt="logo" />
      <CategoryCarrossel />
      <OffersCarrossel />
    </Container>
  )
}
