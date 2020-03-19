import colors from './colors'

export default {
  colors,
  googleFont: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
  fonts: {
    body: '"Source Code Pro", monospace',
    heading: '"Source Code Pro", monospace',
    monospace: '"Source Code Pro", monospace',
  },
  fontWeights: {
    body: 400,
    heading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
  },
  styles: {
    Slide: {
      justifyContent: 'flex-start',
      margin: '0 auto',
      overflow: 'visible',
      padding: '8rem 6rem',
      position: 'inherit',
      width: '80vw',
      '& [name="wrapper"]': {
        padding: '0 1em'
      }
    },
    Header: {
      color: 'sub',
    },
    h3: {
      width: '74vw',
      padding: '0rem',
      margin: '1rem 0rem 1rem 0rem',
      fontWeight: 200,
    },
    h4: {
      width: '74vw',
      padding: '0rem',
      margin: '2rem 0rem 2rem 2rem',
      fontWeight: 100,
    },
    a: {
      color: colors.link || colors.text,
      fontSize: '1.6rem'
    },
    blockquote: {
      width: '70vw',
      borderLeft: "10px solid #ddd",
      color: "#999",
      fontSize: '0.8em',
      padding: "0.2em",
      whiteSpace: "pre-line",
      margin: '1rem 0'
    },
    p: {
      width: '74vw',
      margin: '1rem'
    },
    pre: {
      width: '70vw',
      color: 'background',
      fontSize: '0.8em',
      bg: 'text',
      padding: '0.6em',
      margin: '0em'
    },
    ul: {
      width: '70vw',
      padding: '0 1rem',
      margin: '0.2rem 0rem 0rem 0rem',
    },
    li: {
      fontSize: '1.1em',
      padding: '1rem 0'
    },
    img: {
      width: '74vw',
      height: '40vw',
      margin: '0',
      padding: '0'
    },
    code: {
      bg: 'text',
      color: 'background',
      lineHeight: '1.4em',
      padding: '0'
    },
  }
}
