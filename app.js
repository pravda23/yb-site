// selectors 

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const leftArrow = document.querySelector('.fa-circle-left')
const rightArrow = document.querySelector('.fa-circle-right')
const leftText = document.querySelector('.left-text')

// event listeners
// console.log(arrows.classList)

right.addEventListener('click', (event) => {
    left.classList.remove('overlayUp')
    event.target.classList.toggle('overlayUp')
    leftArrow.classList.toggle('flipArrow')

})

left.addEventListener('click', (event) => {
    right.classList.remove('overlayUp')
    event.target.classList.toggle('overlayUp')
    rightArrow.classList.toggle('flipArrow')
    leftText.class
})