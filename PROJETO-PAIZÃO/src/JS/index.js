/*
OBJETIVO - quando clicar nos botões mostrar
a imagem correspondente

PASSOS:
passo 1- dar um jeito de pegar o elemento HTML dos botões

passo 2- dar um jeito de identificar o clique
do usuário no botão

passo 3- desmarcar botão selecionado anterior

passo 4- maracr botão clicado como se estivesse selecionado

passo 5- esconder imagem anterior

passo 6- fazer aparecer a imagem correspondente
ao botão clicado
-----------------------------------------------------
*/

//passo 1- dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
//"procedimento do passo 6."
const imagens = document.querySelectorAll('.imagem');

//passo 2- dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('Clicou');

        // passo 3- desmarcar botão selecionado anterior
        desmarcaBotaoAnterior();

        //passo 4- maracr botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //passo 5- esconder imagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6- fazer aparecer a imagem correspondenteao botão clicado
     
        imagens[indice].classList.add('ativa');

    })
})

function desmarcaBotaoAnterior() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

