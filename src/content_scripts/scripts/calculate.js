import Calculator from 'little-calculator'

const calculator = new Calculator()

const calculate = {
    solve: exp => {
        console.log(exp)
        const result = calculator.compute(exp)
        console.log(result)
        return result
    }
}

export default calculate