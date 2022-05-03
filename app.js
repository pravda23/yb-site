// selectors 
const top01 = document.querySelector('.top')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const bottom = document.querySelector('.bottom')
const leftOverlay = document.querySelector('.leftOverlay')
const rightOverlay = document.querySelector('.rightOverlay')
const topOverlay = document.querySelector('.topOverlay')
const bottomOverlay = document.querySelector('.bottomOverlay')
const arrows = document.querySelector('i')

// when user clicks a panel, the panel is identified and its status in the global state object is updated to "on"

top01.addEventListener('click', (event) => {
    event.target.classList.toggle('overlayUp')
})

right.addEventListener('click', (event) => {
    event.target.classList.toggle('overlayUp')
})

bottom.addEventListener('click', (event) => {
    event.target.classList.toggle('overlayUp')
})

left.addEventListener('click', (event) => {
    event.target.classList.toggle('overlayUp')
})