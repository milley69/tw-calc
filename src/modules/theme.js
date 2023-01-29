// export const Theme = () => {
export const changeTheme = (
  mainTheme,
  otherTheme1,
  otherTheme2,
  mainThemeURL,
  otherTheme1URL,
  otherTheme2URL
) => {
  const body = document.body
  body.classList.remove(otherTheme1)
  body.classList.remove(otherTheme2)
  if (!body.classList.contains(mainTheme)) {
    body.classList.add(mainTheme)
    mainThemeURL.classList.add('bx-tada')
    otherTheme1URL.classList.remove('bx-tada')
    otherTheme2URL.classList.remove('bx-tada')
    if (otherTheme1URL.classList.contains(`bxs-${otherTheme1}`)) {
      otherTheme1URL.classList.toggle(`bxs-${otherTheme1}`)
    }
    if (otherTheme2URL.classList.contains(`bxs-${otherTheme2}`)) {
      otherTheme2URL.classList.toggle(`bxs-${otherTheme2}`)
    }
    mainThemeURL.classList.toggle(`bxs-${mainTheme}`)
    localStorage.setItem('theme', `${mainTheme}`)
  }
}
export const themeCheker = () => {
  let wine = document.querySelector('.bx-wine')
  let leaf = document.querySelector('.bx-leaf')
  let popsicle = document.querySelector('.bx-popsicle')
  let ls = localStorage.getItem('theme')
  if (ls == 'leaf') {
    changeTheme('leaf', 'popsicle', 'wine', leaf, popsicle, wine)
  } else if (ls == 'wine') {
    changeTheme('wine', 'leaf', 'popsicle', wine, leaf, popsicle)
  } else if (ls == 'popsicle') {
    changeTheme('popsicle', 'wine', 'leaf', popsicle, wine, leaf)
  } else {
    localStorage.setItem('theme', 'leaf')
    themeCheker()
  }
}
// }
