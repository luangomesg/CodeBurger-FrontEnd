import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  width: 100%;
  height: 250px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    height: 150px;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
`

export const ProductName = styled.p`
  font-weight: bolder;
  font-size: 16px;
  color: #000000;
`

export const ProductPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  margin-top: 30px;
`
