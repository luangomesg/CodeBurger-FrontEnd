import styled from 'styled-components'

export const Container = styled.div`
  background: #d3d3d3;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media (max-width: 780px) {
    width: 80%;
  }

  @media (max-width: 715px) {
    width: 100%;
  }
`

export const ContainerItems = styled.div`
  display: grid;
  grid-gap: 10px 50px;
  grid-template-areas:
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';
  height: 100%;

  .title {
    grid-area: title;
    margin-bottom: 20px;
  }

  .items {
    grid-area: items;
  }

  .items-price {
    grid-area: items-price;
  }

  .delivery-tax {
    grid-area: delivery-tax;
  }

  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }

  @media (max-width: 780px) {
    h2 {
      font-size: 20px;
      text-align: center;
    }
  }
`

export const ContainerTotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 50px;
`
