import { changeTheme } from '../modules/theme.js'

export default function favorite() {
  let key = document.getElementById('key2')
  let favorite = key.querySelector('[data-key="favorite"]')

  let wine = document.querySelector('.bx-wine')
  let leaf = document.querySelector('.bx-leaf')
  let popsicle = document.querySelector('.bx-popsicle')

  favorite.addEventListener('click', () => {
    if (favorite.checked) {
      favorite.checked = false
      key.classList.remove('opacity-hide')
      favorite.classList.add('favorite_close')
      favorite.children[0].classList.toggle('bxs-heart')
    } else {
      favorite.checked = true
      key.classList.add('opacity-hide')
      favorite.classList.remove('favorite_close')
      favorite.children[0].classList.toggle('bxs-heart')
    }
  })
  key.addEventListener('click', (e) => {
    const clickIcon = e.target.closest('button').dataset.key
    if (clickIcon == 'leaf') {
      changeTheme('leaf', 'popsicle', 'wine', leaf, popsicle, wine)
    }
    if (clickIcon == 'popsicle') {
      changeTheme('popsicle', 'wine', 'leaf', popsicle, wine, leaf)
    }
    if (clickIcon == 'wine') {
      changeTheme('wine', 'leaf', 'popsicle', wine, leaf, popsicle)
    }
  })
}
