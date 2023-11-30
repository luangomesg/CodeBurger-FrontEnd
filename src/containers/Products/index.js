import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/productsLogo.svg'
import { CardProduct } from '../../components'
import apiCodeburger from '../../services/api'
import formatCurrency from '../../utils/FormatCurrency'
import {
  Container,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

export function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeburger.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()

    async function loadProducts() {
      const { data } = await apiCodeburger.get('products')

      const newProducts = data.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilterProducts(newFilterProducts)
    }
  }, [activeCategory, products])
  return (
    <Container>
      <img className="productLogo" src={ProductsLogo} alt="logo" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => {
            return (
              <CategoryButton
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                }}
                isActiveCategory={activeCategory === category.id}
              >
                {category.name}
              </CategoryButton>
            )
          })}
      </CategoriesMenu>

      <ProductsContainer>
        {filterProducts &&
          filterProducts.map(product => {
            return <CardProduct key={product.id} product={product} />
          })}
      </ProductsContainer>
    </Container>
  )
}
