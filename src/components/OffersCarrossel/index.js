import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Offers from '../../assets/OFERTAS.png'
import { useCart } from '../../hooks/CartContext.js'
import apiCodeburger from '../../services/api'
import formatCurrency from '../../utils/FormatCurrency.js'
import { Container, OfferImg, ContainerItems } from './styles'

export function OffersCarrossel() {
  const [offers, setOffers] = useState([])
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()
  useEffect(() => {
    async function loadOffers() {
      const { data } = await apiCodeburger.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 4 }
  ]
  return (
    <Container>
      <OfferImg src={Offers} alt="Logo da Oferta" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => {
            return (
              <ContainerItems key={product.id}>
                <img src={product.url} alt="Foto do produto"></img>
                <p>{product.name}</p>
                <p>{product.formatedPrice}</p>
                <button
                  onClick={() => {
                    putProductsInCart(product)
                    navigate('/carrinho')
                  }}
                >
                  Peça agora
                </button>
              </ContainerItems>
            )
          })}
      </Carousel>
    </Container>
  )
}
