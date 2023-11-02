function countEmote() {
    const ones = document.getElementsByClassName('one').length;
    const twos = document.getElementsByClassName('two').length;
    const p = document.getElementsByClassName('p').length;
    const emotes = ones + twos + p;
    document.getElementById('emote-Count').innerText = "There are " + emotes + " emotes elements on this page.";
}

function countIdOne() {
    const ones = document.getElementById('idOne').getElementsByClassName('one').length;
    document.getElementById('idOne-Count').innerText = "There are " + ones + " O.o in the first ID.";
}

function countIdTwo() {
    const twos = document.getElementById('idTwo').getElementsByClassName('two').length;
    document.getElementById('idTwo-Count').innerText = "There are " + twos + " o.O in the second ID.";
}