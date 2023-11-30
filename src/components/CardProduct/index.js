import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart()
  return (
    <Container>
      <img src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
