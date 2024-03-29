import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import apiCodeburger from '../../../services/api'
import formatCurrency from '../../../utils/FormatCurrency'
import paths from '../../../utils/paths'
import { Container, Img, EditIconStyle, DeleteIconStyle } from './styles'

function ListProducts() {
  const navigate = useNavigate()
  const [products, setProducts] = useState()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiCodeburger.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228822' }} />
    }
    return <CancelIcon style={{ color: '#cc1717' }} />
  }

  function editProduct(product) {
    navigate(paths.EditProduct, { state: product })
  }

  async function deleteProduct(product) {
    try {
      await apiCodeburger.delete(`products/${product.id}`)
      setProducts(products.filter(p => p.id !== product.id))
      toast.success('Produto deletado com sucesso')
    } catch (err) {
      toast.error('Falha ao deletar o produto')
    }
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell align="center">Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="imagem-produto" />
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIconStyle onClick={() => deleteProduct(product)} />
                    <EditIconStyle onClick={() => editProduct(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
