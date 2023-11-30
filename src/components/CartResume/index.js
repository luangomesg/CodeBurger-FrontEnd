import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import apiCoderburger from '../../services/api'
import formatCurrency from '../../utils/FormatCurrency'
import { Button } from '../Button'
import { Container, ContainerItems, ContainerTotal } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    try {
      const { status } = await apiCoderburger.post(
        'orders',
        { products: order },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Pedido realizado com sucesso', {
          position: 'top-right',
          theme: 'colored'
        })
      } else if (status === 404) {
        toast.error(
          'Falha ao realizar o seu pedido, tente novamente mais tarde'
        )
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema, tente novamente mais tarde')
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Container>
        <ContainerItems>
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </ContainerItems>
        <ContainerTotal>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </ContainerTotal>
      </Container>
      <Button style={{ marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  )
}
