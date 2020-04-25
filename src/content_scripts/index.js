import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'
import onSearch from './scripts/onSearch'

console.log('Content scripts has loaded')
const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value
const showCalculator = onSearch.showCalculator(query)
console.log("showCalculator: ", showCalculator)
if(showCalculator) {
    ReactDOM.render(<Main query={query} type={showCalculator} />, content[0])
}