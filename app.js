// selectors 

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const leftArrow = document.querySelector('.fa-circle-left')
const rightArrow = document.querySelector('.fa-circle-right')
const leftText = document.querySelector('.left-text')
const rightText = document.querySelector('.right-text')
const leftHeader = document.querySelector('.left-header')
const rightHeader = document.querySelector('.right-header')

// event listeners
// console.log(arrows.classList)

right.addEventListener('click', (event) => {
    left.classList.remove('scaleUp')
    event.target.classList.toggle('scaleUp')
    leftArrow.classList.toggle('flipArrow')
    rightText.classList.toggle('hidden')
    leftText.classList.add('hidden')
    rightHeader.classList.toggle('hidden')


})

left.addEventListener('click', (event) => {
    right.classList.remove('scaleUp')
    event.target.classList.toggle('scaleUp')
    rightArrow.classList.toggle('flipArrow')
    leftText.classList.toggle('hidden')
    rightText.classList.add('hidden')
    leftHeader.classList.toggle('hidden')
})