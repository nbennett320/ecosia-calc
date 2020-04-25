import React, { Component } from 'react'
import {
  ThemeProvider,
  TextField
} from '@material-ui/core'
import Pallete from './ColorPallete'

class Result extends Component {
  render() {
    const { 
      query, 
      result 
    } = this.props
    return (
      <ThemeProvider theme={Pallete()}>
        <div style={styles.main}>
          <TextField
            id="result-field"
            defaultValue={result}
            label={`${query}=`}
            variant="outlined"
            color="primary"
            style={styles.textField}
          />
        </div>
      </ThemeProvider>
    )
  }
}

const styles = {
    main: {
      width: '100%',
      padding: '30px 10px',
      fontSize: '24px'
    },

    textField: {
      width: '100%',
    }
}

export default Result