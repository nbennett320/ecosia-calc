import React, { Component } from 'react'

export default class Bottom extends Component {
  state = {
    isHovering: false
  }

  toggleHover = () => {
    this.setState({isHovering: !isHovering})
  }

  render() {
    return (
      <span style={styles.main}>
        <a href="https://github.com/nbennett320/ecosia-calc/issues/new"
          className="widget__footer-feedback js-feedback-open"
          onMouseEnter={() => this.setState({isHovering: true})}
          onMouseLeave={() => this.setState({isHovering: false})}
          style={
            this.state.isHovering 
              ? styles.hover.link
              : styles.link
          }
        >
          Feedback
        </a>
      </span>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 20px',
    borderTop: '1px solid #ededed',
  },

  link: {
    marginLeft: 'auto',
    color: '#9b9b9b',
    fontSize: '11px',
    textDecoration: 'none',
  },

  hover: {
    link: {
      marginLeft: 'auto',
      color: '#9b9b9b',
      fontSize: '11px',
      textDecoration: 'underline',
    }
  }
}