const txt = document.querySelector('#txt');
const divImg = document.querySelector('.divImg');

// função que quando ativada faz divImg ter uma borda
function bordaDiv() {
    divImg.style.border = '2px solid black'
};

// ao clicar ele cria uma borda
divImg.addEventListener('click', bordaDiv);

txt.onclick = () => {
    alert('Campo de texto clicado')
};

const clicked = () => {
    console.log("Clicado")
};

txt.addEventListener('keypress', () => {
    alert('Tecla precionada');
})

divImg.addEventListener('mouseover', () => {
    divImg.style.opacity = 0.5;
})

divImg.addEventListener('mouseout', () => {
    divImg.style.opacity = 1;
})