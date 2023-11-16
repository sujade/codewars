function squareDigits(num){
    const result = num.toString().split('').map(x => x ** 2).join('')
    return parseInt(result)
}