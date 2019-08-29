export function singularOrPlural (amount, singular, plural) {
  return amount > 1 ? plural : singular
}

export function toMoney (value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
