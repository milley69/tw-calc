export const calc = () => {
  const key = document.getElementById('key2')
  const what = document.getElementById('what')
  const who = document.getElementById('who')

  let equal = key.querySelector('[data-key="equal"]')
  let percent = key.querySelector('[data-key="%"]')
  let delAll = key.querySelector('[data-key="del-all"]')
  let delLast = key.querySelector('[data-key="del-last"]')
  let del = key.querySelector('[data-key="del"]')
  let powbtn = key.querySelector('[data-key="pow"]')
  let multiply = key.querySelector('[data-key="multiply"]')
  let minus = key.querySelector('[data-key="minus"]')
  let obelus = key.querySelector('[data-key="obelus"]')
  let plus = key.querySelector('[data-key="plus"]')

  let fuck = []
  what.value = '0'
  let enter = () => eval(fuck.join(''))

  const pow = (num) => `Math.pow(${num},2)`
  const percentage = (num) => {
    let res = enter()
    return (res / 100) * +num
  }

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
  const symbolAdd = (symbol) => {
    if (fuck.length < 24) {
      delSymbol()
      fuck.push(symbol)
      what.value = fuck.join('')
    } else {
      equal.click()
      symbolAdd(symbol)
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
    setTimeout(() => {
      console.clear()
    }, 100)
  })
  percent.addEventListener('click', () => {
    let row = []
    for (let i = fuck.length - 1; i >= 0; i--) {
      if (
        !(fuck[i] == '+' || fuck[i] == '-' || fuck[i] == '*' || fuck[i] == '/')
      ) {
        row.unshift(fuck[i])
        fuck.pop()
      } else break
    }
    let symbolDel = fuck.pop()
    let percentageReturn = percentage(row.join(''))
    fuck.push(symbolDel)
    fuck.push(percentageReturn)
    what.value = fuck.join('')
  })
  powbtn.addEventListener('click', () => {
    let row = []
    if (fuck.length > 0) {
      for (let i = fuck.length - 1; i >= 0; i--) {
        if (
          !(
            fuck[i] == '+' ||
            fuck[i] == '-' ||
            fuck[i] == '*' ||
            fuck[i] == '/'
          )
        ) {
          row.unshift(fuck[i])
          fuck.pop()
        } else break
      }
      if (row.length > 0) {
        fuck.push(pow(row.join('')))
        what.value = fuck.join('')
      }
    }
  })
  multiply.addEventListener('click', () => symbolAdd('*'))
  minus.addEventListener('click', () => symbolAdd('-'))
  obelus.addEventListener('click', () => symbolAdd('/'))
  plus.addEventListener('click', () => symbolAdd('+'))

  key.addEventListener('click', (e) => {
    const click = e.target.dataset.key
    if (click == '(') {
      if (
        fuck.at(-1) !== '*' &&
        fuck.at(-1) !== '/' &&
        fuck.at(-1) !== '+' &&
        fuck.at(-1) !== '-' &&
        fuck.length !== 0
      ) {
        fuck.push('*')
      }
    }
    if (click == 'number' || click == '.' || click == '(' || click == ')') {
      fuck.push(e.target.innerText)
      what.value = fuck.join('')
    }
    console.log(fuck)
  })
}
