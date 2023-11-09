const emoteArray = [];
const inputText = document.getElementById('inputEmote');
const storeButton = document.getElementById('storeEmote');
const latestEmote = document.getElementById('latestInput');
const randomEmote = document.getElementById('randomInput');
const printLatestButton = document.getElementById('printAddedEmote');
const printRandomButton = document.getElementById('printRandomEmote');
const addOO = document.getElementById('O.O');


storeButton.addEventListener('click', function () {
    const text = inputText.value;
    emoteArray.push(text);
    inputText.value = '';
});

addOO.addEventListener('click', function () {
  randomEmote.textContent = "O.O";
})

printLatestButton.addEventListener('click', function () {
  latestEmote.textContent = emoteArray[emoteArray.length - 1];
});

printRandomButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * emoteArray.length);
    randomEmote.textContent = emoteArray[randomIndex];
});