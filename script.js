//************************************************************************************ */
//Direitos Intelectuais: https://projects.raspberrypi.org/pt-PT/projects/pixel-art/6
//
//Implementações: Tonis Torres 
//*********************************************************************************** */
window.onload = function () {
    createPalette();
    createDivsContainer();

}

/*Criando as divs que serão setadas na div color-palette*/
function createPalette() {
    let line = 4;
    let containerPaletteColor = document.getElementById('color-palette');
    for (let i = 0; i < line; i++) {
        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "color");
        containerPaletteColor.appendChild(objectCreateDiv);
    }
    //pincel de cores 
    painterElementsCollorPalette();
}
/*Da cores a Paleta de Quatro Cores Cirada*/
function painterElementsCollorPalette() {
    let captureElement = document.querySelectorAll('.color');
    for (let i = 0; i < captureElement.length; i += 1) {
        if (i === 0) {
            captureElement[i].style.background = "black";
        } else if (i === 1) {
            captureElement[i].style.background = "blue";
        } else if (i === 2) {
            captureElement[i].style.background = "yellow";
        } else {
            captureElement[i].style.background = "green";
        }
    }
}


function createDivsContainer() {
    let line = 5;
    let containerPrincipalI = document.getElementById('container-1');
    let containerPrincipalII = document.getElementById('container-2');
    let containerPrincipalIII = document.getElementById('container-3');
    let containerPrincipalIV = document.getElementById('container-4');
    let containerPrincipalV = document.getElementById('container-5');

    for (let i = 0; i < line; i++) {
        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalI.appendChild(objectCreateDiv);
    }

    for (let i = 0; i < line; i += 1) {
        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalII.appendChild(objectCreateDiv);
    }

    for (let i = 0; i < line; i += 1) {
        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalIII.appendChild(objectCreateDiv);
    }

    for (let i = 0; i < line; i += 1) {

        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalIV.appendChild(objectCreateDiv);
    }

    for (let i = 0; i < line; i += 1) {

        // criar um elemento html dianâmico para colocar na list ordenada
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalV.appendChild(objectCreateDiv);
    }

}