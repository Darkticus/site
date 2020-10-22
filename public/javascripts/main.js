addEventListener('load', initiate);
function initiate(){
    let box = document.getElementById('box');
    box.addEventListener('click', boxNone);
}
function boxNone(){
    console.log('test');
}