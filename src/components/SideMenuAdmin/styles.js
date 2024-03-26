import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }

  .changeExit {
    position: fixed;
    bottom: 30px;
  }

  @media (max-width: 960px) {
    width: 100%;
    height: 250px;

    hr {
      display: none;
    }

    .changeExit {
      position: relative;
      bottom: 0;
    }
  }
`

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${props => (props['data-isactive'] ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 10px;
  padding-left: 10px;

  .icon {
    color: #ffffff;
  }

  @media (max-width: 960px) {
    justify-content: center;
  }
`

export const ListLink = styled(Link)`
  font-size: 16px;
  font-weight: normal;
  line-height: 19px;
  font-style: normal;
  color: #ffffff;
  text-decoration: none;
  margin-left: 8px;
`
