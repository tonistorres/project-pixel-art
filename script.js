//************************************************************************************ */
// Direitos Intelectuais:
// https://projects.raspberrypi.org/pt-PT/projects/pixel-art/6
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_remove_class
// Implementações: Tonis Alberto Torres Ferreira
// Repositório do Projeto:https://github.com/tryber/sd-016-b-project-pixels-art/pull/50
//*********************************************************************************** */

let capureELementGridContainerI;
let containerPrincipalI;
let containerPixelBoard = document.getElementById('pixel-board');
let containerBoxInfo = document.getElementById('box-info');

window.onload = function () {
    createPalette();
    criarContainersDivs();
    createDivsPixels();
    carregaElementsPaletteMain();
    carragaElementsPixelDivs();

    //eventColorPaletteColorFatherStart();
}

let captureElementPaletteColorFather = document.getElementsByClassName('color');


function carregaElementsPaletteMain() {

    for (let i = 0; i < captureElementPaletteColorFather.length; i += 1) {


        switch (i) {

            case 0:

               containerBoxInfo.innerText = "User Experience:"
                containerBoxInfo.innerText += " "+"Cor Preta da Paleta de Cores Selecionada: ";

                //Function Duplo Click
                captureElementPaletteColorFather[i].addEventListener("dblclick", function () {

                    if (captureElementPaletteColorFather[0].getAttribute("class") === "color selected black") {
                      
                        captureElementPaletteColorFather[0].classList.remove("class","selected");
                        
                        
                        
                        
                        alert("Capturando: "+captureElementPaletteColorFather[0].getAttribute("class"))
                        

                        containerBoxInfo.innerText = "User Experience:"
                        containerBoxInfo.innerText += "Cor Branca Selecionada. Para Continuar Pintando Selecione uma Nova Cor";


                    }



                });

                //Function Click 
                captureElementPaletteColorFather[i].addEventListener("click", function () {


                    if (captureElementPaletteColorFather[0].getAttribute("class") === "color black") {
                        
                        captureElementPaletteColorFather[0].classList.remove("class","black");
                        captureElementPaletteColorFather[0].classList.add("selected");
                        captureElementPaletteColorFather[0].classList.add("black");

                        alert("Capturando: "+captureElementPaletteColorFather[0].getAttribute("class"))

                        containerBoxInfo.innerText = "User Experience:"
                        containerBoxInfo.innerText += " Cor Preta da Paleta Selecionada";
                    }

                });


                break;
            case 1:
                break;

        }


    }

}


/**FUNÇÃO DE PALETA DE CORES TRABALHANDO */
let captureElementPixelDivs = document.getElementsByClassName('pixel');
function carragaElementsPixelDivs() {
    for (let i = 0; i < captureElementPixelDivs.length; i += 1) {
        switch (i) {
            case 0:

                captureElementPixelDivs[i].addEventListener("click", function () {
                    if (captureElementPaletteColorFather[i].getAttribute("class") === "color selected black") {
                        captureElementPixelDivs[i].classList.add("black");
                    } else if (captureElementPaletteColorFather[i].getAttribute("class") === "color selected blue") {
                        captureElementPixelDivs[i].classList.add("blue");
                    } else if (captureElementPaletteColorFather[i].getAttribute("class") === "color selected yellow") {
                        captureElementPixelDivs[i].classList.add("yellow");
                    } else if (captureElementPaletteColorFather[i].getAttribute("class") === "color selected green") {
                        captureElementPixelDivs[i].classList.add("green");
                    }
                    else {
                        
                        if(captureElementPixelDivs[i].getAttribute("class")==="pixel black"){
                            captureElementPixelDivs[i].classList.remove("class","black");
                            alert("Classe(s) Predominante: "+captureElementPixelDivs[i].getAttribute("class"))
                        }
                        
                        
                        
                    }

                });
                break;

            case 1:
                //  console.log("falta programar");
                break;
            case 2:
                // console.log("falta programar");
                break;
            case 3:
                // console.log("falta programar");
                break;

            // default:
            //     console.log("nenhuma das anteriores ");

        }



    }
}


/*Função cria as quatro paletas de cores que servirão para pintar*/
function createPalette() {
    let line = 4;
    let containerPaletteColor = document.getElementById('color-palette');
    for (let i = 0; i < line; i++) {
        if (i === 0) {

            const div = document.createElement('div');
            div.classList.add("color", "selected", "black");
            containerPaletteColor.appendChild(div);


        } else if (i === 1) {
            const div = document.createElement('div');
            div.classList.add("color", "blue");
            containerPaletteColor.appendChild(div);
        } else if (i === 2) {
            const div = document.createElement('div');
            div.classList.add("color", "yellow");
            containerPaletteColor.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.classList.add("color", "green");
            containerPaletteColor.appendChild(div);
        }
    }

}

/**Função cria as 05 (Divs Container que receberam em cada 5 divs Pixels) */
function criarContainersDivs() {
    let objectCreateDiv = document.createElement('div');
    objectCreateDiv.setAttribute("id", "container-divs-pixels");
    objectCreateDiv.setAttribute("class", "model");
    containerPixelBoard.appendChild(objectCreateDiv);
}


/**Função Cria os 25 quadrados(pixels) de forma Automatizada */
function createDivsPixels() {
    let line = 25;
    containerPrincipalI = document.getElementById('container-divs-pixels');
    for (let i = 0; i < line; i++) {
        let objectCreateDiv = document.createElement('div');
        objectCreateDiv.setAttribute("class", "pixel");
        containerPrincipalI.appendChild(objectCreateDiv);
    }
}