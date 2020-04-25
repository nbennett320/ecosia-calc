import React, { Component } from 'react'
import Result from './Result'
import calculate from './scripts/calculate'

class Calculator extends Component {
  render() {
    const { query } = this.props
    return (
      <div style={styles.main}>
        <Result query={query} result={calculate.solve(query)} />
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '30px 20px'
  }
}

export default Calculator