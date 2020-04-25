// math registers
const expressions = /(a?(arc)?(sin(us)?|cos(inus)?|e\^|E|tan(gens)?)|sqrt|squareroot|exp|log|ln|pi|Abs)/
const operators = /[\(\)\+\-\^\/\%\.\,\!\=\*]/

// standardize queries, remove spaces 
// (may do more in the future)
export const clean = q => q.replace(/\s/g, '')

// test for math and function expressions
// (not perfect but should usually work)
const onSearch = {
  isExpression: query => {
    const expression = new RegExp(`^(${expressions.source}|${operators.source}|[xyz0-9\\.\\,])*$`, 'i')
    return expression.test(clean(query))
  },

  isFunction: query => {
    const funct = new RegExp(`(^(${expressions.source}|${operators.source})*[0-9]*[xyz][^0-9])|([xyz][\\+\\-\\\\/\\*\\^|])|([\\.\\,0-9]*[xyz]$)`, 'i')
    return funct.test(clean(query))
  },

  showCalculator: query => {
    if(onSearch.isExpression(query) && onSearch.isFunction(query)) return 'function'
    else if(onSearch.isExpression(query) && /[^0-9\,\.]/.test(clean(query))) return 'expression'
    else return false
  }
}

export default onSearch