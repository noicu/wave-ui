import config from './config'

const { css: cssConfig } = config
const entries = Object.entries(config.breakpoints)
const breakpoints = entries.map(([label, max], i) => {
  // Construct the breakpoint objects.
  const [, value = 0] = entries[i - 1] || []
  return { label, min: value ? value + 1 : 0, max }
})

let computedStyles = null
// Defaults CSS variables. Will be overridden in the main function of this file (the export default)
// which fetches the CSS :root variables generated by _layout.scss.
const cssVars = {
  cssScope: '.w-app',
  baseIncrement: 4
}

const generateColors = () => {
  let styles = ''
  const { cssScope } = cssVars

  // Extract status colors and place them after the other colors.
  const { info, warning, success, error, ...colors } = config.colors

  for (const color in colors) {
    styles +=
      `${cssScope} .${color}--bg{background-color:${config.colors[color]}}` +
      `${cssScope} .${color}{color:${config.colors[color]}}`
  }

  // Color shades are generated in core.js, if the option is on.
  if (cssConfig.colorShades && config.colorShades) {
    Object.entries(config.colorShades).forEach(([label, color]) => {
      styles +=
        `${cssScope} .${label}--bg{background-color:${color}}` +
        `${cssScope} .${label}{color:${color}}`
    })
  }

  // Status colors must remain after the other colors so they have priority in form validations.
  // That only makes sense when there are 2 colors on the same element: e.g. `span.primary.error`.
  const statusColors = { info, warning, success, error } // This order is also important for priorities.
  for (const color in statusColors) {
    styles +=
      `${cssScope} .${color}--bg{background-color:${config.colors[color]}}` +
      `${cssScope} .${color}{color:${config.colors[color]}}`
  }

  // Add the primary color to the CSS variables for reuse in components.
  const cssVariables = []
  cssVariables.push(`--primary: ${config.colors.primary}`)
  styles += `:root {${cssVariables.join(';')}}`

  return styles
}

// Generate the layout grid. E.g. xs1, xs2, ..., xl12.
const generateBreakpoints = () => {
  let styles = ''
  const { cssScope } = cssVars

  // Can't add dynamic breakpoints as CSS variables:
  // CSS variables are not supported in media queries yet.
  // https://www.w3.org/TR/css-variables-1/#using-variables
  // const cssVariables = []
  // Object.entries(config.breakpoints).forEach(([label, value]) => {
  //   cssVariables.push(`--breakpoint-${label}: ${value}px`)
  // })
  // styles += `:root {${cssVariables.join(';')}}`

  // Define media queries for each breakpoint: xs, sm, md, lg, xl.
  breakpoints.forEach(({ min, label }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    if (label === 'xs') {
      // For each breakpoint, loop from 1 to 12. E.g. xs1, xs2, ..., xl12.
      for (let i = 0; i < cssConfig.grid; i++) {
        styles +=
          `${cssScope} .${label}${cssConfig.grid - i}{` +
          `width:${parseFloat(((cssConfig.grid - i) * 100 / cssConfig.grid).toFixed(4))}%;}`
      }
    }
    else {
      styles += `@media(min-width:${min}px){`

      // For each breakpoint, loop from 1 to 12. E.g. xs1, xs2, ..., xl12.
      for (let i = 0; i < cssConfig.grid; i++) {
        styles +=
          `${cssScope} .${label}${cssConfig.grid - i}{` +
          `width:${parseFloat(((cssConfig.grid - i) * 100 / cssConfig.grid).toFixed(4))}%;}`
      }

      styles += '}'
    }
  })

  return styles
}

/*
  THIS WILL NOT BE AN OPTION (UNLESS I CHANGE MY MIND):
  Having spaces classes per breakpoint is really an interesting feature, so that we can use something
  like: `smd-ma2 mdu-ma12`.
  The drawback is that it generates so much CSS that I don't think it is worth it.
  In this test, for only 2 margin rules, it already generates 35kb of CSS...

const generateBreakpointSpaces = () => {
  let styles = ''
  const { cssScope, baseIncrement } = cssVars

  breakpoints.forEach(({ label, min }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    // Discard `xl`: xlu is just like xl.
    if (!['xs', 'xl'].includes(label)) {
      styles += `@media(min-width:${min}px){`
      for (let i = -12; i < 25; i++) {
        styles += `${cssScope} .${label}u-ma${i}{margin:${i * baseIncrement}px}`
        styles += `${cssScope} .${label}u-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
      }
      styles +=  '}'
    }
  })

  breakpoints.forEach(({ label, min, max }) => {
    styles += `@media (min-width:${min}px) and (max-width:${max}px){`
    for (let i = -12; i < 25; i++) {
      styles += `${cssScope} .${label}-ma${i}{margin:${i * baseIncrement}px}`
      styles += `${cssScope} .${label}-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
    }
    styles +=  '}'
})

  breakpoints.forEach(({ label, max }) => {
    // Discard `xs`: xsd is just like xs.
    // Discard `xl`: xld is just like the basic rules already in CSS.
    if (!['xs', 'xl'].includes(label)) {
      styles += `@media (max-width:${max}px){`
      for (let i = -12; i < 25; i++) {
        styles += `${cssScope} .${label}d-ma${i}{margin:${i * baseIncrement}px}`
        styles += `${cssScope} .${label}d-mx${i}{margin-right:${i * baseIncrement}px;margin-left:${i * baseIncrement}px}`
      }
      styles +=  '}'
    }
  })

  // console.log(styles)
  // debugger
  return styles
} */

const genBreakpointLayoutClasses = () => {
  let styles = ''
  const { cssScope } = cssVars
  const layoutClasses = [
    'show{display:block}',
    'hide{display:none}',
    'd-flex{display:flex}',
    'd-iflex{display:inline-flex}',
    'd-block{display:block}',
    'd-iblock{display:inline-block}',
    'text-left{text-align:left}',
    'text-center{text-align:center}',
    'text-right{text-align:right}',
    'text-nowrap{whitespace:nowrap}',
    'row{flex-direction:row}',
    'column{flex-direction:column}',
    'grow{flex-grow:1;flex-basis:auto}',
    'no-grow{flex-grow:0}',
    'shrink{flex-shrink:1;margin-left:auto;margin-right:auto}',
    'no-shrink{flex-shrink:0}',
    'fill-width{width:100%}',
    'fill-height{height:100%}',
    'basis-zero{flex-basis:0}',
    'align-start{align-items:flex-start}',
    'align-center{align-items:center}',
    'align-end{align-items:flex-end}',
    'align-self-start{align-self:flex-start}',
    'align-self-center{align-self:center}',
    'align-self-end{align-self:flex-end}',
    'align-self-stretch{align-self:stretch}',
    'justify-start{justify-content:flex-start}',
    'justify-center{justify-content:center}',
    'justify-end{justify-content:flex-end}',
    'justify-space-between{justify-content:space-between}',
    'justify-space-around{justify-content:space-around}',
    'justify-space-evenly{justify-content:space-evenly}'
  ]

  // Define media queries for each breakpoint: xs, sm, md, lg, xl.

  breakpoints.forEach(({ label, min }) => {
    // Discard `xs` since the min is 0 (`media query (min-width: 0)`), and leave in _layout.scss.
    if (label !== 'xs') {
      styles +=
        `@media(min-width:${min}px){` +
        layoutClasses.map(rule => `${cssScope} .${label}u-${rule}`).join('') +
        '}'
    }
  })

  breakpoints.forEach(({ label, min, max }) => {
    styles +=
      `@media (min-width:${min}px) and (max-width:${max}px){` +
      layoutClasses.map(rule => `${cssScope} .${label}-${rule}`).join('') +
      '}'
  })

  breakpoints.forEach(({ label, max }) => {
    if (label !== 'xl') {
      styles +=
        `@media (max-width:${max}px){` +
        layoutClasses.map(rule => `${cssScope} .${label}d-${rule}`).join('') +
        '}'
    }
  })

  return styles
}

export default () => {
  let styles = ''
  computedStyles = getComputedStyle(document.documentElement)
  cssVars.cssScope = computedStyles.getPropertyValue('--css-scope')
  cssVars.baseIncrement = parseInt(computedStyles.getPropertyValue('--base-increment'))

  styles += generateColors()
  styles += generateBreakpoints()
  if (cssConfig.breakpointLayoutClasses) styles += genBreakpointLayoutClasses()
  // if (cssConfig.breakpointSpaces) styles += generateBreakpointSpaces()

  return styles
}
