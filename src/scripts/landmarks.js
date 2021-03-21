const menuToggle = document.querySelector('.toggle')
const landmarksToggle = document.querySelector('.landmarks-page')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  landmarksToggle.classList.toggle('active')
})