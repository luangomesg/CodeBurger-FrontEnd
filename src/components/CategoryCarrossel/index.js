import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import Category from '../../assets/CATEGORIAS.png'
import apiCodeburger from '../../services/api'
import { Container, CategoryImg, ContainerItems, Button } from './styles'

export function CategoryCarrossel() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeburger.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <CategoryImg src={Category} />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => {
            return (
              <ContainerItems key={category.id}>
                <img src={category.url} alt="Foto da categoria"></img>
                <Button onClick={() => navigate(`/produtos/${category.id}`)}>
                  {category.name}
                </Button>
              </ContainerItems>
            )
          })}
      </Carousel>
    </Container>
  )
}
