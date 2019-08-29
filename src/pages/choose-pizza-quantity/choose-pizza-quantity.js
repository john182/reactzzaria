import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Content, HeaderContent, H3, Footer } from '../../ui'
import { Input as MaterialInput, Button } from '@material-ui/core'
import { withTheme } from '@material-ui/styles'
import { Redirect } from 'react-router-dom'
import t from 'prop-types'
import { HOME, CHECKOUT } from '../../routes'

const ChoosePizzaQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(e.target.value)
    }
  }

  return (
    <Fragment>
      <Content>
        <HeaderContent>
          <H3> Quantas Pizzaas você gostaria com esses sabores.</H3>
        </HeaderContent>
        <MainContent>
          <Input value={quantity} onChange={handleChange} autoFocus />
          <Button variant='contained' color='secondary'>
            Adicionar e<br />
            montar outra
          </Button>
        </MainContent>
      </Content>
      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
            children: 'Finalizar compra'
          }
        }}
      />
    </Fragment>
  )
}

ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
&& {
  margin-bottom: 18px;
},
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const MainContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`

export default withTheme(ChoosePizzaQuantity)
