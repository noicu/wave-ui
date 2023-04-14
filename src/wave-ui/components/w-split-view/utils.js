export const sum = (...values) =>
  values.reduce((partialSum, value) => partialSum + value, 0)

export class ViewOptionsUtils {
  static convertToPixels (
    measure,
    length
  ) {
    const value = ViewOptionsUtils.getValue(measure)
    if (ViewOptionsUtils.getUnit(measure) === '%') {
      return `${(length * value) / 100}px`
    }
    else {
      return `${value}px`
    }
  }

  static getValue (measure) {
    if (measure === undefined) return 0
    measure = measure.toString()
    if (measure.endsWith('%')) return +measure.substring(0, measure.length - 1)
    else if (measure.endsWith('px')) {
      return +measure.substring(0, measure.length - 2)
    }
    else return +measure
  }

  static getUnit (measure) {
    if (measure === undefined) return 'px'
    measure = measure.toString()
    if (measure.endsWith('%')) return '%'
    else return 'px'
  }

  static getSumOfSizes (viewsOptions) {
    return (
      sum(
        ...viewsOptions.map((option) =>
          ViewOptionsUtils.getValue(option.size)
        )
      ) || 0
    )
  }
}
