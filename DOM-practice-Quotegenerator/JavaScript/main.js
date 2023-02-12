document.querySelector('.new-quote').addEventListener('click', newQuote)
let quote = document.querySelector('#quote')
let person = document.querySelector('.person')



function newQuote(){
    const random = Math.floor(Math.random() * 1643)

    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      quote.innerText = data[random].text
      person.innerText = data[random].author
    });
}