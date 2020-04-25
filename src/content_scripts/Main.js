import React, { Component } from 'react'
import Calculator from './Calculator'
import Graph from './Graph'
import Bottom from './Footer'

export default class Main extends Component {
  render() {
    const { query, type } = this.props
    return (
      <div className="widget-container" style={styles.main}>
        {type === 'expression' && <Calculator query={query} />}
        {type === 'function' && <Graph query={query} />}
        <Bottom />
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '0',
  }
}