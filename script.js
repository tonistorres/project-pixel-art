//************************************************************************************ */
//Direitos Intelectuais: https://projects.raspberrypi.org/pt-PT/projects/pixel-art/6
//
//Implementações: Tonis Torres 
//*********************************************************************************** */
window.onload = function () {
painterElementsCollorPalette();
}

function painterElementsCollorPalette() {
    let captureElement = document.querySelectorAll('.color');
    for (let i = 0; i < captureElement.length; i += 1) {
        if(i===0){
            captureElement[i].style.background="black";
        }else if(i===1){
            captureElement[i].style.background="blue";
        }else if(i===2){
            captureElement[i].style.background="yellow";
        }else{
            captureElement[i].style.background="green";
        }
    }
}