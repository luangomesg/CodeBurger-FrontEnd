import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map(item => {
        return (
          <ItemContainer key={item.id} data-isactive={path === item.link}>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
          </ItemContainer>
        )
      })}
      <hr />

      <ItemContainer className="changeExit">
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to="/" onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
