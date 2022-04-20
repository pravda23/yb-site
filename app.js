const state = {
    top: 'off',
    right: 'off',
    bottom: 'off',
    left: 'off',
}

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

// // event listeners

arrows.style.backgroundColor = 'red'
this.addEventListener('click', (i) => {


    function resetState() {
        Object.keys(state).forEach(key => {
            state[key] = 'off';
        })
    }

    for (let j = 0; j <= 4; j++) {
        resetState()
        if (i.target.classList[0] === Object.keys(state)[j]) {
            // console.log(i.target.classList[0])
            // console.log(Object.values(state))
            // let objKeys = (Object.keys(state))
            // console.log(objKeys[1])
            // console.log(Object.keys(state)[j])

            state[i.target.classList[0]] = 'on'
            console.log(state)
        }

        Object.keys(state).forEach(value => {
            if (state[value] === 'off') {
                i.target.classList.toggle(`${i.target.classList[0]}Overlay`)
            }
            console.log(state[value])
        })
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