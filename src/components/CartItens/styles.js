import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 100%;
  background-color: #d3d3d3;
  padding: 10px;
`

export const Header = styled.div`
  display: grid;
  width: ${props => (props.size > 0 ? '60%' : '100%')};
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #000;

  p {
    font-size: 16px;
    color: #000;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #000;
  grid-gap: 20px 20px;
  width: 60%;
  align-items: center;

  img {
    border-radius: 10px;
    width: 120px;
    padding: 10px;
    border-radius: 15px;
  }

  p {
    font-size: 15px;
    color: #000;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transform: translateY(-5px);
  }

  .minion {
    font-size: 34px;
    transform: translateY(-10px);
  }
`
