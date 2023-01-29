import { changeTheme } from '../modules/theme.js'

export const calc = () => {
  const key = document.getElementById('key2')
  const what = document.getElementById('what')
  const who = document.getElementById('who')

  let equal = key.querySelector('[data-key="equal"]')
  let delAll = key.querySelector('[data-key="del-all"]')
  let delLast = key.querySelector('[data-key="del-last"]')
  let del = key.querySelector('[data-key="del"]')
  let powbtn = key.querySelector('[data-key="pow"]')
  let multiply = key.querySelector('[data-key="multiply"]')
  let minus = key.querySelector('[data-key="minus"]')
  let obelus = key.querySelector('[data-key="obelus"]')
  let plus = key.querySelector('[data-key="plus"]')

  let wine = document.querySelector('.bx-wine')
  let leaf = document.querySelector('.bx-leaf')
  let popsicle = document.querySelector('.bx-popsicle')

  let fuck = []

  let enter = () => eval(fuck.join(''))

  const pow = (num) => `Math.pow(${num},2)`

  const render = () => {
    what.value = fuck.join('')
  }
  const delSymbol = () => {
    if (
      fuck[fuck.length - 1] == '*' ||
      fuck[fuck.length - 1] == '/' ||
      fuck[fuck.length - 1] == '+' ||
      fuck[fuck.length - 1] == '-'
    ) {
      fuck.pop()
    }
  }
  // const click = e.target.dataset.key
  // const clickIcon = e.target.closest('button').dataset.key

  equal.addEventListener('click', () => {
    if (what.value !== '') {
      who.value = enter()
      fuck = []
      fuck.push(who.value)
    }
  })

  del.addEventListener('click', () => {
    fuck = []
    what.value = '0'
  })
  delLast.addEventListener('click', () => {
    fuck.pop()
    render()
  })
  delAll.addEventListener('click', () => {
    fuck = []
    what.value = '0'
    who.value = ''
  })
  powbtn.addEventListener('click', () => {
    let row = []
    for (let i = fuck.length - 1; i >= 0; i--) {
      if (
        !(fuck[i] == '+' || fuck[i] == '-' || fuck[i] == '*' || fuck[i] == '/')
      ) {
        row.unshift(fuck[i])
        fuck.pop()
      } else break
    }
    fuck.push(pow(row.join('')))
    what.value = fuck.join('')
  })
  multiply.addEventListener('click', () => {
    delSymbol()
    fuck.push('*')
    what.value = fuck.join('')
  })
  minus.addEventListener('click', () => {
    delSymbol()
    fuck.push('-')
    what.value = fuck.join('')
  })
  obelus.addEventListener('click', () => {
    delSymbol()
    fuck.push('/')
    what.value = fuck.join('')
  })
  plus.addEventListener('click', () => {
    delSymbol()
    fuck.push('+')
    what.value = fuck.join('')
  })

  key.addEventListener('click', (e) => {
    const click = e.target.dataset.key
    const clickIcon = e.target.closest('button').dataset.key

    // if (click == 'number' || click == '(' || click == ')') {
    //   if (what.value !== '' && who.value !== '') {
    //     fuck = []
    //     // render()
    //   }
    // }
    if (click == '(') {
      if (fuck.at(-1) !== '*') {
        fuck.push('*')
      }
    }
    if (click == 'number' || click == '.' || click == '(' || click == ')') {
      if (
        (fuck.at(-1) !== '+' && who.value !== '') ||
        (fuck.at(-1) !== '-' && who.value !== '') ||
        (fuck.at(-1) !== '*' && who.value !== '') ||
        (fuck.at(-1) !== '/' && who.value !== '')
      ) {
        fuck = []
      }

      fuck.push(e.target.innerText)
      what.value = fuck.join('')
    }
    if (clickIcon == 'leaf') {
      changeTheme('leaf', 'popsicle', 'wine', leaf, popsicle, wine)
    }
    if (clickIcon == 'popsicle') {
      changeTheme('popsicle', 'wine', 'leaf', popsicle, wine, leaf)
    }
    if (clickIcon == 'wine') {
      changeTheme('wine', 'leaf', 'popsicle', wine, leaf, popsicle)
    }
    console.log(fuck)
  })
}
