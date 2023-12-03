import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 62px;
  width: 100%;
  background-color: #d3d3d3;
  align-items: center;
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 100px;
`

export const PageLink = styled.a`
  display: flex;
  cursor: pointer;

  span {
    color: ${props => (props.isActive ? '#9758a6' : '#00000')};
    font-weight: bold;
  }
`

export const PageLinkCart = styled.a`
  display: flex;
  cursor: pointer;

  &::after {
    content: '${props => props.cartCount}';
    height: 20px;
    padding: 0 5px 0 5px;
    border-radius: 100%;
    background-color: #9758a6;
    color: white;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  right: 0;
  padding-right: 100px;
`

export const SepareteLine = styled.div`
  background-color: #a9a9a9;
  width: 2px;
  height: 50px;
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
