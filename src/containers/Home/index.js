import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarrossel from '../../components/CategoryCarrossel'
import { Container } from './styles'

function Home() {
  return (
    <Container>
      <img src={HomeLogo} alt="logo" />
      <CategoryCarrossel />
    </Container>
  )
}

export default Home
