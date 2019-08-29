import React from 'react'

import PizzaSize from '../Main/components/PizzaSize'
import { pizzaSizes } from '../../data/mock'
import { HeaderContent, H3, H4, PizzasGrid, Content } from '../../ui'

const ChoosePizzaSize = () => {
  return (
    <Content>
      <HeaderContent>
        <H3>O que vai ser Hoje?</H3>
        <H4>Escolha o tamanho da pizza.</H4>
      </HeaderContent>
      <PizzasGrid>
        {pizzaSizes.map(p => (
          <PizzaSize key={p.id} pizzaSize={p} />
        ))}
      </PizzasGrid>
    </Content>
  )
}

export default ChoosePizzaSize
