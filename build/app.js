// SELECT ITEMS FROM HTML
const mobileOpenBtn = document.getElementById('mobile-open-button')
const mobileCloseBtn = document.getElementById('mobile-close-button')

// Event Listener
mobileOpenBtn.addEventListener('click', () => {
    mobileCloseBtn.classList.toggle('hidden')
    mobileCloseBtn.classList.toggle('flex')
})

mobileCloseBtn.addEventListener('click', () => {
    mobileCloseBtn.classList.toggle('hidden')
    mobileCloseBtn.classList.toggle('flex')
})
   