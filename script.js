alert ("Iremos somar 2 numeros")

let numberOne = prompt ("Digite o primeiro número: ")
let numberTwo = prompt ("Digite o segundo número: ")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('A Soma dos dois números são: ' + sum)
alert('Subtração dos dois números são: ' + sub)
alert('Multiplicação dos dois números são: ' + multi)
alert('Divisão dos dois números são: ' + div)
alert('Resto da divisão dos dois números são: ' + restDiv)

if(sum%2==0){
    alert ("O número é par")
} else {
    alert ("O número é impar")
}

if (numberOne == numberTwo) {
    alert ("O número é igual")
} else {
    alert ("O número é diferente")
}