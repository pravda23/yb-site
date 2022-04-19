// selectors 
const top01 = document.querySelector('.top')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const bottom = document.querySelector('.bottom')
const leftOverlay = document.querySelector('.leftOverlay')
const rightOverlay = document.querySelector('.rightOverlay')
const topOverlay = document.querySelector('.topOverlay')
const bottomOverlay = document.querySelector('.bottomOverlay')

// // event listeners

left.addEventListener('click', (e) => {
    e.target.classList.toggle('left' + 'Overlay')
})

right.addEventListener('click', (e) => {
    e.target.classList.toggle('rightOverlay')
})
top01.addEventListener('click', (e) => {
    e.target.classList.toggle('topOverlay')
})
bottom.addEventListener('click', (e) => {
    e.target.classList.toggle('bottomOverlay')
})