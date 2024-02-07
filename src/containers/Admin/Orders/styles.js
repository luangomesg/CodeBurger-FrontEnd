import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
`

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;
  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323050;
  cursor: pointer;
  font-weight: ${props => (props['data-isactivestatus'] ? 'bold' : 'normal')};
  border-bottom: ${props =>
    props['data-isactivestatus'] ? ' 2px solid #9758a6' : 'none'};
  padding-bottom: 5px;
`
