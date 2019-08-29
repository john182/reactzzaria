import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import MaterialToolbar from '@material-ui/core/Toolbar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { ReactComponent as MainLogo } from '../../assets/img/logo.svg'
import { useAuth } from '../../hooks'
import { Link } from 'react-router-dom'
import { HOME } from '../../routes'

const style = theme => ({
  containerLogo: {
    flexGrow: '1'
  },
  tamLogo: {
    width: '200px'
  }
})

const Header = ({ classes }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { onLogout, userInfo } = useAuth()

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar>
      <Toolbar>
        <div className={classes.containerLogo}>
          <LogoContainer>
            <Link to={HOME}>
              <Logo />
            </Link>
          </LogoContainer>
        </div>

        <Typography variant="h6">
          Olá {userInfo.user.firstName}
        </Typography>
        <IconButton aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit">
          <AccountCircle />
        </IconButton>
        <Menu open={Boolean(anchorEl)} id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          onClose={handleClose}>
          <MenuItem onClick={onLogout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const Toolbar = styled(MaterialToolbar)`
  && {
    margin: 0 auto;
    max-width: 1028px;
    width: 100%;
  }
`

const LogoContainer = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;
  & path {
        fill: #fff;
    }
  & line {
        stroke: #fff;
    }
`

export default withStyles(style)(Header)
