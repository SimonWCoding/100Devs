// Without event delegation...

document.querySelector('#football').addEventListener('click', function(e){
    console.log('Football is clicked')

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgreen'
    }
}
)

document.querySelector('#basketball').addEventListener('click', function(e){
    console.log('Basketball is clicked')

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgreen'
    }
}
)

document.querySelector('#boxing').addEventListener('click', function(e){
    console.log('Boxing is clicked')

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgreen'
    }
}
)

document.querySelector('#tennis').addEventListener('click', function(e){
    console.log('Tennis is clicked')

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgreen'
    }
}
)

document.querySelector('#golf').addEventListener('click', function(e){
    console.log('Golf is clicked')

    const target = e.target
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgreen'
    }
}
)

// With event delegation

document.querySelector('#sports').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id' + ' is clicked.'))

    const target = e.target

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgreen'
    }
})

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'Rugby'
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport)