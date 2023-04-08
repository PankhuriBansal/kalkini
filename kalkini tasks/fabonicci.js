//fabonicci series 

const fibonacci = (number) => {
    if(number == 1){
        return 1
    }
    else {
        return fibonacci(number-2) + fibonacci(number-3)
    }
}