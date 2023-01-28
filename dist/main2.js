const favorite = key.querySelector('[data-key="favorite"]')

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
