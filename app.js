const arr = ['left', 'right', 'top', 'bottom']

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

this.addEventListener('click', (i) => {
    console.log()
    for (j in arr) {
        if (i.target.classList[0] === arr[j]) {

            i.target.classList.toggle(`${i.target.classList[0]}Overlay`)
        }

    }
})

// this.addEventListener('click', (i) => {
//     console.log()
//     for (j in arr) {
//         if (i.target.classList[0] === arr[j]) {
//             i.target.classList.toggle(`${i.target.classList[0]}Overlay`)
//         }

//     }
// })