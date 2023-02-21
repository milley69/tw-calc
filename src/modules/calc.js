export const calc = () => {
  const key = document.getElementById('key2')
  const what = document.getElementById('what')
  const who = document.getElementById('who')

  let equal = key.querySelector('[data-key="equal"]')
  let percent = key.querySelector('[data-key="%"]')
  let delAll = key.querySelector('[data-key="del-all"]')
  let delLast = key.querySelector('[data-key="del-last"]')
  let del = key.querySelector('[data-key="del"]')
  let sqrtbtn = key.querySelector('[data-key="sqrt"]')
  let powbtn = key.querySelector('[data-key="pow"]')
  let multiply = key.querySelector('[data-key="multiply"]')
  let minus = key.querySelector('[data-key="minus"]')
  let obelus = key.querySelector('[data-key="obelus"]')
  let plus = key.querySelector('[data-key="plus"]')
  let brackets = key.querySelector('[data-key="brackets"]')

  let boobs = 0

  let fuck = []
  let powValue = 0
  what.value = '0'

  const enter = () => eval(fuck.join(''))

  const pow = (num) => `Math.pow(${num},2)`
  const sqrt = (num) => `Math.sqrt(${num})`
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
    if (fuck.length < 24 && powValue < 2) {
      delSymbol()
      fuck.push(symbol)
      render()
    } else {
      equal.click()
      symbolAdd(symbol)
    }
  }
  const boobsFunc = () => {
    boobs++
    if (boobs == 10) {
      brackets.innerHTML = '(. )Y( .)'
      brackets.setAttribute('disabled', 'disabled')
      console.log('boobs')
      setTimeout(() => {
        brackets.removeAttribute('disabled', 'disabled')
      }, 500)
    }
  }
  const comparisonBrackets = () => {
    return !!(
      fuck.at(-1) == '+' ||
      fuck.at(-1) == '-' ||
      fuck.at(-1) == '*' ||
      fuck.at(-1) == '/' ||
      fuck.at(-1) == '('
    )
  }

  brackets.addEventListener('click', () => {
    let open = 0
    let close = 0
    for (const bracket of fuck) {
      bracket == '(' ? open++ : open
      bracket == ')' ? close++ : close
    }
    if (open > close) {
      comparisonBrackets() ? fuck.push('(') : fuck.push(')')
    } else if (open == close) {
      if (fuck.length == 0) {
        fuck.push('(')
      } else {
        comparisonBrackets() ? fuck.push('(') : fuck.push('*', '(')
      }
    }
    render()
  })

  equal.addEventListener('click', () => {
    if (what.value !== '' && what.value != 0) {
      who.value = enter()
      fuck = []
      powValue = 0
      fuck.push(who.value)
    }
    if (who.value == Infinity) {
      who.value = 'Dokhuya che to'
      del.click()
    } else if (isNaN(who.value)) {
      who.value = 'Dokhuya khochesh'
      del.click()
    }
  })

  del.addEventListener('click', () => {
    fuck = []
    what.value = '0'
    powValue = 0
  })
  delLast.addEventListener('click', () => {
    fuck.pop()
    render()
  })
  delAll.addEventListener('click', () => {
    fuck = []
    what.value = '0'
    who.value = ''
    powValue = 0
    setTimeout(() => {
      console.clear()
    }, 100)
    boobsFunc()
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
    if (symbolDel == undefined) {
      delAll.click()
    } else {
      fuck.push(symbolDel)
      fuck.push(percentageReturn)
      render()
    }
  })
  sqrtbtn.addEventListener('click', () => {
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
        fuck.push(sqrt(row.join('')))
        render()
        powValue += 1
      }
    }
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
        render()
        powValue += 1
      }
    }
  })
  multiply.addEventListener('click', () => symbolAdd('*'))
  minus.addEventListener('click', () => symbolAdd('-'))
  obelus.addEventListener('click', () => symbolAdd('/'))
  plus.addEventListener('click', () => symbolAdd('+'))

  key.addEventListener('click', (e) => {
    const click = e.target.dataset.key
    if (click == 'number' || click == '.') {
      fuck.push(e.target.innerText)
      render()
    }
  })
}
