import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background: #d3d3d3;

  img {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 715px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
