import styled from 'styled-components'

export const Container = styled.div`
  background: #d3d3d3;
  display: flex;
  min-height: 100vh;
  justify-content: flex-start;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const ContainerItems = styled.div`
  padding: 20px;
  width: 100%;
`
