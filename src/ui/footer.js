import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Grid, Button as MaterialButton, Typography } from '@material-ui/core'
import { singularOrPlural } from '../util/heler'
import { useAuth } from '../hooks'
import t from 'prop-types'

const Footer = ({ buttons, location, history }) => {
  const { userInfo } = useAuth()
  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, slices, name } = pizzaSize

  console.log(buttons)
  return (
    <FooterContainer>
      <Container>
        <Grid container>
          <OrderContainer item>
            <Typography>
              <b>{userInfo.user.firstName}, seu pedido é:</b>
            </Typography>
            <Typography variant="h5">
              Pizza <b>{name.toUpperCase()}</b> - ({slices} {' '} fatias, {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
            </Typography>
            {pizzaFlavours && (
              <Typography>
                {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')} {' '}
                <b>{pizzaFlavours.map(p => p.name).join(', ')}</b>
              </Typography>
            )
            }
          </OrderContainer>
          <ButtonsContainer item>
            <Button {...buttons.back}
              component="a"
              onClick={(e) => {
                e.preventDefault()
                history.goBack()
              }} />
            <Button {...buttons.action}
              component={Link}
              color='primary' />

          </ButtonsContainer>
        </Grid>
      </Container>
    </FooterContainer>
  )
}

Footer.propTypes = {
  buttons: t.object.isRequired,
  location: t.object.isRequired,
  history: t.object.isRequired
}

const FooterContainer = styled.footer`
  box-shadow: 0 0 3px #bdbdbd;
  padding: 24px;
  width: 100%;
`

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow:1
  }

`
const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  &&{
    margin-left: 16px;
  }
`
const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  && {
    align-items: center;
    display: flex;
  }
`

export default withRouter(Footer)
