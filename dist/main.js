const key = document.getElementById('key2')
const what = document.getElementById('what')
const who = document.getElementById('who')

let wine = document.querySelector('.bx-wine')
let leaf = document.querySelector('.bx-leaf')
let lavender = document.querySelector('.bx-popsicle')

let value = ''
let fuck = []
// let fuck = ['5', '+', 'Math.pow(5,2)', '+', 'Math.pow(5,2)']

let enter = () => eval(fuck.join(''))

const pow = (num) => `Math.pow(${num},2)`

const render = () => {
  what.value = fuck.join('')
}
// render()
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
// localStorage.setItem('theme', 'leaf')
const changeThemeLeaf = () => {
  document.body.classList.remove('wine')
  document.body.classList.remove('lavender')
  if (!document.body.classList.contains('leaf')) {
    document.body.classList.add('leaf')

    leaf.classList.add('bx-tada')
    wine.classList.remove('bx-tada')
    lavender.classList.remove('bx-tada')

    if (wine.classList.contains('bxs-wine')) {
      wine.classList.toggle('bxs-wine')
    } else if (lavender.classList.contains('bxs-popsicle')) {
      lavender.classList.toggle('bxs-popsicle')
    }

    leaf.classList.toggle('bxs-leaf')
    localStorage.setItem('theme', 'leaf')
  }
}
const changeThemeLavender = () => {
  document.body.classList.remove('wine')
  document.body.classList.remove('leaf')
  if (!document.body.classList.contains('lavender')) {
    document.body.classList.add('lavender')
    leaf.classList.remove('bx-tada')
    wine.classList.remove('bx-tada')
    lavender.classList.add('bx-tada')

    if (leaf.classList.contains('bxs-leaf')) {
      leaf.classList.toggle('bxs-leaf')
    } else if (wine.classList.contains('bxs-wine')) {
      wine.classList.toggle('bxs-wine')
    }
    lavender.classList.toggle('bxs-popsicle')
    localStorage.setItem('theme', 'lavender')
  }
}
const changeThemeWine = () => {
  document.body.classList.remove('lavender')
  document.body.classList.remove('leaf')
  if (!document.body.classList.contains('wine')) {
    document.body.classList.add('wine')
    leaf.classList.remove('bx-tada')
    wine.classList.add('bx-tada')
    lavender.classList.remove('bx-tada')

    if (lavender.classList.contains('bxs-popsicle')) {
      lavender.classList.toggle('bxs-popsicle')
    } else if (leaf.classList.contains('bxs-leaf')) {
      leaf.classList.toggle('bxs-leaf')
    }
    wine.classList.toggle('bxs-wine')
    localStorage.setItem('theme', 'wine')
  }
}

if (localStorage.getItem('theme') == 'leaf') {
  changeThemeLeaf()
} else if (localStorage.getItem('theme') == 'lavender') {
  changeThemeLavender()
} else if (localStorage.getItem('theme') == 'wine') {
  changeThemeWine()
} else {
  changeThemeLeaf()
}

key.addEventListener('click', (e) => {
  const click = e.target.dataset.key
  const clickIcon = e.target.closest('button').dataset.key
  if (click == 'equal') {
    if (what.value !== '') {
      // fuck.push(value)
      who.value = enter()
      value = ''
    }
  }
  if (click == 'del-all') {
    fuck = []
    what.value = '0'
    who.value = ''
    value = ''
  }
  if (click == 'del') {
    fuck = []
    what.value = '0'
    value = ''
    // render()
  }
  if (clickIcon == 'del-last') {
    // value = value.substring(0, value.length - 1)
    // what.value = value
    fuck.pop()
    render()
  }
  if (click == 'pow') {
    let row = []
    for (let i = fuck.length - 1; i >= 0; i--) {
      if (
        !(fuck[i] == '+' || fuck[i] == '-' || fuck[i] == '*' || fuck[i] == '/')
      ) {
        row.unshift(fuck[i])
        fuck.pop()
      } else break
    }
    console.log(row)
    fuck.push(pow(row.join('')))
    what.value = fuck.join('')
    value = ''
  }

  // if (click == 'number' || click == '.' || click == '(' || click == ')') {
  //   value += e.target.innerText
  //   what.value = fuck.join('') + value
  // }
  if (click == 'number' || click == '(' || click == ')') {
    if (what.value !== '' && who.value !== '') {
      fuck = []
      value = ''
      render()
    }
  }
  if (click == 'number' || click == '.' || click == '(' || click == ')') {
    value += e.target.innerText
    fuck.push(value)
    what.value = fuck.join('')
    value = ''
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
    // fuck.push(value)
    fuck.push('+')
    what.value = fuck.join('')
    value = ''
  }
  if (clickIcon == 'leaf') {
    changeThemeLeaf()
  }
  if (clickIcon == 'lavender') {
    changeThemeLavender()
  }
  if (clickIcon == 'wine') {
    changeThemeWine()
  }

  console.log(fuck)
})
// let a = ['1', '2', '-', '3', '4', '+', '5', '6']
// let row = []

// for (let i = fuck.length - 1; i >= 0; i--) {
//   if (a[i] !== '+') {
//     row.unshift(fuck[i])
//   } else break
// }
// fuck.push(pow(row.join('')))
// console.log(aa)
