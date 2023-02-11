const revealButton = document.querySelector('.reveal-button')

const hiddenContent = document.querySelector('.hidden-content')

function revealContent() {
    if (hiddenContent.classList.contains('reveal-button'))
    {
        hiddenContent.classList.remove('reveal-button')
    }

    else {
        hiddenContent.classList.add('reveal-button')
    }
}

revealButton.addEventListener('click', revealContent)