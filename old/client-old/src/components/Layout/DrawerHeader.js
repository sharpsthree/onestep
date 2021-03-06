import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Input from '@material-ui/core/Input'

const styles = theme => ({
  paper: {
    height: HEADER_HEIGHT,
    borderRadius: 0
  }
})

class DrawerHeader extends React.Component {
  handleClick = () => {
    this.props.goto('/')
    this.props.toggleDrawer()
  }

  render() {
    const { classes: s } = this.props
    return (
      <Paper elevation={0} className={s.paper}>
        <Toolbar>
          <Input fullWidth placeholder="搜索功能开发中" />
        </Toolbar>
      </Paper>
    )
  }
}

DrawerHeader.propTypes = {
  goto: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(DrawerHeader)
