window.onload = function (){
document.getElementById('melrose').onclick = blueMelrose;
document.getElementById('cornflowerlilac').onclick = cornflowerLilac
document.getElementById('oceangreen').onclick = oceanGreen
document.getElementById('carnationpink').onclick = carnationPink
document.getElementById('bittersweet').onclick = bitterSweet
document.getElementById('thistle').onclick = lightthistle
document.getElementById('mauve').onclick = darkmauve
document.getElementById('algaegreen').onclick = algaeGreen
document.querySelector('#enter').addEventListener('click',run)
}
function run() {
    const name = document.querySelector('#yourName').value

    document.querySelector('#confirmName').innerText = name
}
function blueMelrose() {
    document.querySelector('#confirmName').style.color = 'rgb(179,186,255)'
}
function cornflowerLilac(){
    document.querySelector('#confirmName').style.color = 'rgb(255,170,163)'
}
function oceanGreen(){
    document.querySelector('#confirmName').style.color = 'rgb(80,208,168)'
}
function carnationPink() {
    document.querySelector('#confirmName').style.color = 'rgb(255, 173, 199)'
}

function bitterSweet() {
    document.querySelector('#confirmName').style.color = 'rgb(255, 113, 107)'
}

function lightthistle() {
    document.querySelector('#confirmName').style.color = 'rgb(215, 178, 214)'
}

function darkmauve() {
    document.querySelector('#confirmName').style.color = 'rgb(205, 175, 255)'
}

function algaeGreen() {
    document.querySelector('#confirmName').style.color = 'rgb(86, 175, 147)'
}