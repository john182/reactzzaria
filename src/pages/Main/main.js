import React, { Fragment, Suspense } from 'react'
import Header from './../../components/Header'
import { CircularProgress, withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { HOME, CHOOSE_PIZZA_FLAVOURS, CHOOSE_PIZZA_QUANTITY } from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../choose-pizza-flavours/'))
const ChoosePizzaQuantity = React.lazy(() => import('../choose-pizza-quantity'))

const Main = () => {
  return (
    <Fragment>

      <Header />
      <Spacer />

      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize}></Route>
          <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours}></Route>
          <Route path={CHOOSE_PIZZA_QUANTITY} component={ChoosePizzaQuantity}></Route>
        </Switch>
      </Suspense>

    </Fragment>

  )
}

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
