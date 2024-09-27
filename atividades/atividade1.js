const itensMenu = [
    {nome: 'Inicio', url: 'index.html'},
    {nome: 'Sobre', url: 'Sobre.html'},
    {nome: 'Contato', url: 'contato.html'}
];

const criarMenu = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    header.appendChild(nav);
    nav.appendChild(ul);
    body.appendChild(header);
};

function percorrer() {
    const ul = document.querySelector('ul');
    itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.url);
        a.textContent = item.nome.toUpperCase();
        li.appendChild(a);
        ul.appendChild(li);
        a.style.textDecoration = 'none';
        a.style.color = 'white'
    })
};

function estilo() {
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = '#071D41';
    header.style.fontFamily = 'Arial';
    ul.style.height = '40px';
    ul.style.display = 'Flex';
    // ul.style. = '';
    ul.style.gap = '20px'
};

criarMenu();
percorrer();
estilo();