function totalText(i) {
    document.getElementById('myouput').innerHTML = i
}
//----------------------Number&dot--------------------------
document.getElementById('dot').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '.'
    totalText(input)
})
document.getElementById('Numb0').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '0'
    totalText(input)
})
document.getElementById('Numb1').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '1'
    totalText(input)
})
document.getElementById('Numb2').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '2'
    totalText(input)
})
document.getElementById('Numb3').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '3'
    totalText(input)
})
document.getElementById('Numb4').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '4'
    totalText(input)
})
document.getElementById('Numb5').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '5'
    totalText(input)
})
document.getElementById('Numb6').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '6'
    totalText(input)
})
document.getElementById('Numb7').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '7'
    totalText(input)
})
document.getElementById('Numb8').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '8'
    totalText(input)
})
document.getElementById('Numb9').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '9'
    totalText(input)
})
//----------------------Operator--------------------------
document.getElementById('plus').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '+'
    totalText(input)
})
document.getElementById('minus').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '-'
    totalText(input)
})
document.getElementById('multiplication').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '*'
    totalText(input)
})
document.getElementById('division').addEventListener('click', () => {
    var input = document.getElementById('myouput').innerHTML + '/'
    totalText(input)
})
//----------------------Controler--------------------------
document.getElementById('equal').addEventListener('click', () => {
    document.getElementById('myouput').innerHTML = eval(document.getElementById('myouput').innerHTML) || ''
})
document.getElementById('delete').addEventListener('click', () => {
    var deleteItem = document.getElementById('myouput').innerHTML
    var arrDelete = deleteItem.split('')
    arrDelete.pop()
    document.getElementById('myouput').innerHTML = arrDelete.join('')
})
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('myouput').innerHTML = ''
})