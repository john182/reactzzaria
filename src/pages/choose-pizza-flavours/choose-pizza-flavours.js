import React, { Fragment, useState } from 'react'
import t from 'prop-types'
import { singularOrPlural, toMoney } from '../../util/heler'
import { H3 } from './../../ui/title'
import { HeaderContent, PizzasGrid, Divider, CardLink, Content, Footer } from '../../ui'
import { Redirect } from 'react-router-dom'
import { HOME, CHOOSE_PIZZA_QUANTITY } from '../../routes'
import { pizzaSabores } from '../../data/mock'
import { Grid, Card as MaterialCard, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { withTheme } from '@material-ui/styles'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckBoxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  console.log(location)

  const { flavours, id } = location.state.pizzaSize

  const selectFlavour = id => (e) => {
    const total = checkboxesCheckeds(checkboxes)
    if (total === flavours && e.target.checked === true) {
      alert('teste')
      return
    }
    setCheckBoxes((checkboxes) => {
      return {
        ...checkboxes,
        [id]: e.target.checked
      }
    })
  }

  return (
    <Fragment>
      <Content>
        <HeaderContent>
          <H3> Escolha até {flavours}{' '} {singularOrPlural(flavours, 'sabor', 'sabores')}.</H3>
        </HeaderContent>
        <PizzasGrid>
          {pizzaSabores.map(p => (
            <Grid item key={p.id} xs>
              <Card checked={!!checkboxes[p.id]}>
                <Label>
                  <CheckBox checked={!!checkboxes[p.id]} onChange={selectFlavour(p.id)} />
                  <Img src={p.image} alt={p.name} />
                  <Divider />
                  <Typography>{p.name}</Typography>
                  <Typography variant="h5">
                    {toMoney(p.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
      <Footer
        buttons={{
          back: {
            children: 'Mudar tamanho'
          },

          action: {
            to: {
              pathname: CHOOSE_PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId(checkboxes)
              }
            },
            children: 'Quantas pizzas?',
            disabled: checkboxesCheckeds(checkboxes).length === 0
          }
        }}
      />

    </Fragment>
  )
}

function checkboxesCheckeds (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

function getFlavoursNameAndId (checkboxes) {
  console.log(checkboxes)
  const result = Object.entries(checkboxes)
    .filter(([_, value]) => !!value)
    .map(([id]) => ({ id, name: pizzaSabores.find(p => p.id === +id) }).name)
  return result
}

ChoosePizzaFlavours.prototype = {
  location: t.object.isRequired
}

const Img = styled.img`
  width: 200px;
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Card = styled(MaterialCard)`
  &&{
    border: 2px solid transparent;
    border-color: ${({ checked }) => checked ? '#4caf50' : ''};
  }
`

export default withTheme(ChoosePizzaFlavours)
