const key = document.getElementById('key2')
const what = document.querySelector('#what')
const who = document.querySelector('#who')

let value = ''
let fuck = []
let enter = () => eval(fuck.join(''))

const pow = (num) => `Math.pow(${num},2)`

const render = () => {
  fuck = fuck.filter((i) => i !== '')
  what.value = fuck.join('')
}

const delSymbol = () => {
  if (
    fuck[fuck.length - 1] == '*' ||
    fuck[fuck.length - 1] == '/' ||
    fuck[fuck.length - 1] == '+' ||
    fuck[fuck.length - 1] == '-'
  ) {
    console.log()
    fuck.pop()
  }
}

key.addEventListener('click', (e) => {
  const click = e.target.dataset.key
  if (click == 'equal') {
    if (what.value !== '') {
      fuck.push(value)
      who.value = enter()
      value = ''
    }
  }
  if (click == 'del-all') {
    fuck = []
    who.value = ''
    value = ''
    render()
  }
  if (click == 'del') {
    fuck = []
    value = ''
    render()
  }
  if (click == 'del-last') {
    value = value.substring(0, value.length - 1)
    what.value = value
  }
  if (click == 'pow') {
    fuck.push(pow(value))
    what.value = fuck.join('') + value
    value = ''
  }

  if (click == 'number' || click == '(' || click == ')') {
    value += e.target.innerText
    what.value = fuck.join('') + value
    console.log(value)
  }
  if (click == 'multiply') {
    delSymbol()
    fuck.push(value)
    fuck.push('*')
    what.value = fuck.join('')
    value = ''
  }
  if (click == 'minus') {
    delSymbol()
    fuck.push(value)
    fuck.push('-')
    what.value = fuck.join('')
    value = ''
  }
  if (click == 'obelus') {
    delSymbol()
    fuck.push(value)
    fuck.push('/')
    what.value = fuck.join('')
    value = ''
  }
  if (click == 'plus') {
    delSymbol()
    fuck.push(value)
    fuck.push('+')
    what.value = fuck.join('')
    value = ''
  }
})
