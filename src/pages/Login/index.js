import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { withStyles } from '@material-ui/core/styles'
import { AuthContext } from '../../context/auth'

const style = {
  root: {
    padding: '40px'
  },
  logo: {
    width: '100%'
  },
  btnGitHub: {
    fontSize: '25px',
    maxWidth: '480px',
    padding: '15px',
    textTransform: 'none'
  }

}

const Login = ({ classes }) => {
  const { onLoginGitHub } = useContext(AuthContext)

  return (
    <div className={classes.root}>
      <Grid
        container justify='center'
        spacing={5}
      >
        <Grid item>
          <Logo className={style.logo} />
        </Grid>
        <Grid item xs={12} container justify='center'>

          <div>
            <Button className={classes.btnGitHub} variant="contained" onClick={onLoginGitHub} >Entra com Github</Button>
          </div>

        </Grid>

      </Grid>

    </div>
  )
}

export default withStyles(style)(Login)
