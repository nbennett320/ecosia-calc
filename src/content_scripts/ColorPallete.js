
import { createMuiTheme } from '@material-ui/core/styles'

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16) * 0.9,
    g: parseInt(result[2], 16) * 0.9,
    b: parseInt(result[3], 16) * 0.9
  } : null
}

const brighten = (hex, factor) => {
  return hex * 1.2 ** factor ? factor : 1
}

const darken = (hex, factor) => {
  return hex * 0.8 ** factor ? factor : 1
}

// defining the color pallete for mui, 
// colors are based on ecosia's logo
const theme = () => createMuiTheme({
  palette: {
    primary: {
      main: '#0097a7',
      light: `#${brighten(0x0097a7)}`,
      dark: `#${darken(0x0097a7)}`,
    },
    secondary: {
      main: '#cddc39',
      light: `#${brighten(0xcddc39)}`,
      dark: `#${darken(0xcddc39)}`,
    },
    error: {
      main: '#e65100',
      light: `#${brighten(0xe65100)}`,
      dark: `#${darken(0xe65100)}`,
    },
  },
})

export default theme