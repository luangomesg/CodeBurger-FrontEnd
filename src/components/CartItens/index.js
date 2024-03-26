import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/FormatCurrency'
import { Container, Header, Body, EmptyCart, QuantityContainer } from './styles'

export function CartItems() {
  const { cartProducts, increasedProductsInCart, decreasedProductsInCart } =
    useCart()

  return (
    <Container>
      <Header size={cartProducts.length}>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ marginLeft: -5 }}>Quantidade</p>
        <p style={{ marginLeft: 15 }}>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => {
          return (
            <Body key={product.id}>
              <img src={product.url} />
              <p>{product.name}</p>
              <p>{formatCurrency(product.price)}</p>
              <QuantityContainer>
                <button
                  onClick={() => decreasedProductsInCart(product.id)}
                  className="minion"
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => increasedProductsInCart(product.id)}>
                  +
                </button>
              </QuantityContainer>

              <p>{formatCurrency(product.price * product.quantity)}</p>
            </Body>
          )
        })
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
