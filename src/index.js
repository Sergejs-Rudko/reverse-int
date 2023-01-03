module.exports = function reverse(n) {
    const checker = (number) => {
        let myArray = number.toString().split('');
        if (myArray[myArray.length - 1] === '0') {
            myArray.pop()
        }
        return +myArray.reverse().join('');
    }
    return checker(Math.abs(n));
}
