import UploadFileIcon from '@mui/icons-material/UploadFile'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import apiCodeburger from '../../../services/api'
import { ButtonStyle, Container, Label, Input, LabelUpload } from './styles'

function NewProduct() {
  const [filename, setFileName] = useState(null)
  const [categories, setCategores] = useState([])
  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeburger.get('categories')

      setCategores(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <LabelUpload>
          {filename || (
            <>
              <UploadFileIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            accept="image/png, image/jpeg"
            {...register('fle')}
            onChange={value => setFileName(value.target.files[0]?.name)}
          />
        </LabelUpload>
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={categorie => categorie.name}
                getOptionValue={categorie => categorie.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>

        <ButtonStyle>Adicionar Produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default NewProduct
