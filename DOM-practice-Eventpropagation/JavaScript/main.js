// Event Probagation

// Event capturing + Changing the text of a button when clicked. 

window.addEventListener('click', function() {
    console.log('Window')
}, true)

document.addEventListener('click', function() {
    console.log('Document')
}, true)

document.querySelector('.div2').addEventListener('click', function() {
    console.log('div2')
}, true)

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div1')
}, true)

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'Clicked!')
}, true)

// Event bubbling

window.addEventListener('click', function() {
    console.log('Window')
}, false)

document.addEventListener('click', function() {
    console.log('Document')
}, false)

document.querySelector('.div2').addEventListener('click', function() {
    console.log('div2')
}, false)

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div1')
}, false)

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'Clicked!')
}, false)

// How to stop event capturing


window.addEventListener('click', function() {
    console.log('Window')
}, true)

document.addEventListener('click', function() {
    console.log('Document')
}, true)

document.querySelector('.div2').addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('div2')
}, true)

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div1')
}, true)

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'Clicked!')
}, true)

// How to stop event bubbling

window.addEventListener('click', function() {
    console.log('Window')
}, false)

document.addEventListener('click', function() {
    console.log('Document')
}, false)

document.querySelector('.div2').addEventListener('click', function(e) {
    e.stopPropagation()
    console.log('div2')
}, false)

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div1')
}, false)

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'Clicked!')
}, false) 

// How to prevent default (stop firing events)

window.addEventListener('click', function() {
    console.log('Window')
}, false)

document.addEventListener('click', function() {
    console.log('Document')
}, false)

document.querySelector('.div2').addEventListener('click', function() {
    console.log('div2')
}, {once: true})

document.querySelector('.div1').addEventListener('click', function() {
    console.log('div1')
}, false)

document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault()
    console.log(e.target.innerText = 'Clicked!')
}, false)