//Exercise 3 : Create A Shopping List
//Bulding The Web Of The Shop

let form = document.createElement('form')
let f = document.body.children[0]
f.appendChild(form)

let label = document.createElement('label')
label.innerText = 'what you need?'
form.appendChild(label)

let input = document.createElement('input')
input.style.width = '120px'
input.style.marginLeft = '5%'
input.style.marginTop = '10%'
form.appendChild(input)
input.id = 'input'
input.type = 'text'

let button = document.createElement('button')
button.innerHTML = 'Add'
button.style.background = 'green'
button.id = 'bt'
form.appendChild(button)

var ul = document.createElement('UL')
form.appendChild(ul)

let buttonClear = document.createElement('button')
buttonClear.innerHTML = 'Clear All'
buttonClear.style.background = 'yellow'
buttonClear.id = 'btC'
form.appendChild(buttonClear)

let buttonNumber = document.createElement('button')
buttonNumber.style.marginTop = '10%'
buttonNumber.style.marginLeft = '10%'
buttonNumber.innerHTML = 'Number of items'
buttonNumber.style.background = 'coral'
buttonNumber.id = 'btN'
form.appendChild(buttonNumber)

