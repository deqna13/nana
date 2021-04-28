/*fetch('https://api.funtranslations.com/translate/braille/unicode.json', {
method: 'get'})
.then(response => response.json())  // convert to json
.then(json => console.log(json))    //print data to console
.catch(err => console.log('Request Failed', err)); // Catch errors

let myFetch = fetch('https://api.funtranslations.com/translate/braille/unicode.json', {
    method: "GET",});

myFetch.then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});

fetch('https://api.funtranslations.com/translate/braille/unicode.json')
.then(res => {
    return res.text();
})
.then(data => {
    $('#container').html(data);
});   */ 

const baseURL = 'https://api.funtranslations.com/translate/braille/unicode.json'
const text = document.getElementById('engtext').value
//const text='okay'

fetch(`${baseURL}?text=${text}`)
  .then(response => response.json())
  .then((response) => { document.getElementById('brtext').value = response.contents.translated.join('') })