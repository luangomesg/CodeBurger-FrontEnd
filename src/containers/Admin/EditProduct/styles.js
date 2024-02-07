import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`

export const ButtonStyle = styled(Button)`
  width: 100%;
  min-width: 250px;
  margin-top: 25px;
  align-self: center;
`

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ContainerInput = styled.div`
  display: flex;

  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`
