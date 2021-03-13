module.exports = function toReadable (number) {
    if(number === 0){
        return 'zero'
    }
    let res = []
    let numbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numString = number.toString().split('')

    if(number < 20){
        if(number < 10){
            res.push([numbers[numString[0]]])
        }else{
            let tmp = numString[0].toString() + numString[1]
            res.push(numbers[tmp])
        }

    }
    if(number <= 99 && number > 19){
        res.push(tens[numString[0] - 2])
        res.push(numbers[numString[1]])
    }
    if(number > 99){
        res.push(numbers[numString[0]])
        res.push('hundred')
        if(numString[1] == 1){
            console.log('tmp this')
            let tmp = numString[1].toString() + numString[2]
            res.push(numbers[tmp])
        }else{
            if(numString[1] != 0){
                res.push(tens[numString[1]-2])
                console.log(res)
            }
            res.push(numbers[numString[2]])
        }


    }
    console.log(res)
    return res.join(' ').trim()
}
