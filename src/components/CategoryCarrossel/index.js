import React, { useEffect } from 'react'

import Category from '../../assets/CATEGORIAS.png'
import apiCodeburger from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarrossel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await apiCodeburger.get('categories')
      console.log(response)
    }

    loadCategories()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} />
    </Container>
  )
}

export default CategoryCarrossel
