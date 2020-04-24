import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        const { query } = this.props
        return (
            <div className="widget-container" style={styles.main}>
                <p className="widget-result"> {query} </p>
            </div>
        )
    }
}

const styles = {
    main: {
        padding: '30px 20px'
    }
}