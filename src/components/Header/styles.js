import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 62px;
  width: 100%;
  background-color: #d3d3d3;
  align-items: center;

  .imgmenu {
    position: absolute;
    right: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 40px;
    display: none;
  }

  @media (max-width: 680px) {
    span {
      color: #ffffff;
    }

    .imgmenu {
      display: flex;
    }
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 100px;

  @media (max-width: 680px) {
    flex-direction: column;
    position: absolute;
    right: 0;
    gap: 0;
    margin-top: 90px;
  }
`

export const PageLink = styled.a`
  display: flex;
  cursor: pointer;
  width: 20px;
  height: 20px;

  span {
    color: ${props => (props['data-isactive'] ? '#9758a6' : '#00000')};
    font-weight: bold;
  }

  @media (max-width: 680px) {
    .hom {
      margin-left: 20px;
      display: ${props => (props['data-menu'] ? 'flex' : 'none')};
    }
    .product {
      margin-right: 10px;
      display: ${props => (props['data-menu'] ? 'flex' : 'none')};
    }
  }
`

export const PageLinkCart = styled.a`
  display: flex;
  cursor: pointer;
  width: 20px;
  height: 20px;

  &::after {
    content: '${props => props['data-cartcount']}';
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

  @media (max-width: 680px) {
    .person {
      display: none;
    }
  }
`

export const SepareteLine = styled.div`
  background-color: #a9a9a9;
  width: 2px;
  height: 50px;

  @media (max-width: 680px) {
    display: none;
  }
`

export const ContainerText = styled.div`
  flex-direction: column;
  justify-content: center;

  @media (max-width: 680px) {
    .exit {
      display: ${props => (props['data-menu'] ? 'flex' : 'none')};
      position: absolute;
      right: 0;
      margin-top: 60px;
      margin-right: 45px;
    }
  }
`
