const menuToggle = document.querySelector('.toggle')
const mainPageToggle = document.querySelector('.main-page')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  mainPageToggle.classList.toggle('active')
})