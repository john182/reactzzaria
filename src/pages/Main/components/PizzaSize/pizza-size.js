import React from 'react'
import { Grid, Typography, Card } from '@material-ui/core'
import styled from 'styled-components'
import { singularOrPlural } from '../../../../util/heler'
import { CHOOSE_PIZZA_FLAVOURS } from '../../../../routes'
import { Divider, CardLink } from '../../../../ui'

const PizzaSize = ({ pizzaSize }) => {
  return (
    <Grid item key={pizzaSize.id} xs>
      <Card padding="10">
        <CardLink to={{ pathname: CHOOSE_PIZZA_FLAVOURS, state: { pizzaSize } }} >
          <Pizza>
            <PizzaText>{pizzaSize.size}cm</PizzaText>
          </Pizza>
          <Divider />
          <Typography variant="h5">{pizzaSize.name}</Typography>
          <Typography>
            {pizzaSize.slices} fatias,{' '} {pizzaSize.flavours} {singularOrPlural(pizzaSize.flavours, 'sabor', 'sabores')}
          </Typography>
        </CardLink>
      </Card>
    </Grid>
  )
}

const Pizza = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  z-index: 1

  &::before,
  &::after {
    content: '';
    background: #CCC;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
    position: absolute;
  }

  &::after {
    height: 160px;
    width: 1px;
  }

`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
&& {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

`

export default PizzaSize
