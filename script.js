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
let containerPaletteColor; //Variável Utilizada para Criar a Paleta Principal de Cores
let captureClassColor = document.getElementsByClassName('color');//capturas todas divs contém class color
let captureClassPixels = document.getElementsByClassName('pixel');//capturas todas divs contém class pixels

window.onload = function () {
    createPalette(); //função cria a paleta de cores MAIN 
    criarContainersDivs();//função cria o container onde ficará as divs Pixels
    createDivsPixels();// função cria as divs pixels 
    addListeningMainReed();//função estuta elementos da paleta de cores
    addListeningMainReedDivsPixels();//funçâo Escuta Quadrados

}



/*Função Cria a Paleta Principal de Cores, e adiciona as respectivas classes*/
function createPalette() {
    let line = 4;
    containerPaletteColor = document.getElementById('color-palette');
    for (let i = 0; i < line; i++) {
        if (i === 0) {
            const div = document.createElement('div');
            div.classList.add("color", "black", "selected");
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

/*Seleciona coloca a class selected no elemento atual ao passo que retira o selected 
da classe antes selecionada 
*/
function addSelectedEvent(event) {
    let handleSelected = document.querySelector('.selected');
    handleSelected.classList.remove('selected');//o black inicializa com elemento selected quando clicar remove
    event.target.classList.add('selected');//e adiciona no elemento clicado 

}

/*Colocando escuta nos Elementos da Paleta de Cores */
function addListeningMainReed() {
    for (let i = 0; i < captureClassColor.length; i += 1) {
        captureClassColor[i].addEventListener("click", addSelectedEvent);
    }
}

function selectSquarePixels(event) {

    let handleSelected = document.querySelector('.selected');


    let pixelRemove = document.querySelectorAll('.white');

    alert(pixelRemove.length);
    
    for (let i = 0; i < pixelRemove.length; i++) {
        pixelRemove[i].classList.remove('white');

    }

    if (handleSelected.classList.contains('black')) {

        event.target.classList.add("black");

    } else if (handleSelected.classList.contains('blue')) {

        event.target.classList.add("blue");

    } else if (handleSelected.classList.contains('yellow')) {

        event.target.classList.add("yellow");

    } else {

        event.target.classList.add("green");
    }




}

/*Função Adiciona Escuta nos Quadrados */
function addListeningMainReedDivsPixels() {

    for (let i = 0; i < captureClassPixels.length; i += 1) {
        captureClassPixels[i].addEventListener("click", selectSquarePixels);

    }
}

/**Função cria Container Recebe 25 divs) */
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
        //https://www.w3schools.com/jsref/prop_html_classname.asp
        objectCreateDiv.className += " white";
        containerPrincipalI.appendChild(objectCreateDiv);
    }
}

