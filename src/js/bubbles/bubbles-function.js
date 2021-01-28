function bubblesAusblenden() {
    document.getElementsByClassName('bubble-blender')[0].style.display = 'none'
}
function bubblesEinblenden() {
    document.getElementsByClassName('bubble-blender')[0].style.display = 'inline'
}
function gemeinsamkeitenEinblenden() {
    document.getElementsByClassName('little-bubble-wrapper-gemeinsamkeiten')[0].style.display = 'flex'
}
function gemeinsamkeitenAusblenden() {
    document.getElementsByClassName('little-bubble-wrapper-gemeinsamkeiten')[0].style.display = 'none'
}
function zusatzinfosEinblenden() {
    document.getElementsByClassName('little-bubble-wrapper-zusatzinfos')[0].style.display = 'flex'
}
function zusatzinfosAusblenden() {
    document.getElementsByClassName('little-bubble-wrapper-zusatzinfos')[0].style.display = 'none'
}
function schlussfolgerungenEinblenden() {
    document.getElementsByClassName('little-bubble-wrapper-schlussfolgerungen')[0].style.display = 'flex'
}
function schlussfolgerungenAusblenden() {
    document.getElementsByClassName('little-bubble-wrapper-schlussfolgerungen')[0].style.display = 'none'
}
function ButtonEinblenden() {
    document.getElementsByClassName('bubble-button')[0].style.display = 'inline'
}
function ButtonAusblenden() {
    document.getElementsByClassName('bubble-button')[0].style.display = 'none'
}


document.getElementById("bubble1").addEventListener('click', function(){
    bubblesAusblenden();
    zusatzinfosEinblenden();
    ButtonEinblenden();
});
document.getElementById("bubble2").addEventListener('click', function(){
    bubblesAusblenden();
    gemeinsamkeitenEinblenden();
    ButtonEinblenden();
});
document.getElementById("bubble3").addEventListener('click', function(){
    bubblesAusblenden();
    schlussfolgerungenEinblenden();
    ButtonEinblenden();
});
document.getElementById("button-uebersicht").addEventListener('click', function(){
    bubblesEinblenden();
    zusatzinfosAusblenden();
    gemeinsamkeitenAusblenden();
    schlussfolgerungenAusblenden();
    ButtonAusblenden();
});