const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal (){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = 'Valor 01 ou Valor 02 inválido. Digite um número.';

    } else {

        let total = v1 * v2;

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O valor total obtido foi <strong>R$ ${total.toFixed(2)}</strong>.</p>
        `
    };
};

function desconto(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = 'Valor 01 ou Valor 02 inválido. Digite um número.';

    } else {

        let valorDesconto = (v1 * v2) / 100;
        let total = v1 - valorDesconto;

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Valor original: <strong>R$ ${v1.toFixed(2)}</strong></p>
        <p>Desconto (${v2}%): <strong>R$ ${valorDesconto.toFixed(2)}</strong></p>
        <p>Valor final: <strong>R$ ${total.toFixed(2)}</strong></p>
        `
    };
};

function juros(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = 'Valor 01 ou Valor 02 inválido. Digite um número.';

    } else {

        let acrescimo = (v1 * v2)/100
        let total = v1 + acrescimo

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Valor inicial: <strong>R$ ${v1.toFixed(2)}</strong></p>
        <p>Acréscimo (${v2}%): <strong>R$ ${acrescimo.toFixed(2)}</strong></p>
        <p>Total com juros: <strong>R$ ${total.toFixed(2)}</strong></p>     
        `
    };
};

function comissao(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = 'Valor 01 ou Valor 02 inválido. Digite um número.';

    } else {

        let valorComissao = (v1 * v2)/100

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Valor da venda: <strong>R$ ${v1.toFixed(2)}</strong></p>
        <p>Percentual aplicado: <strong>${v2}%</strong></p>
        <p>Comissão a receber: <strong>R$ ${valorComissao.toFixed(2)}</strong></p>
        `
    };
};

function lucro(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex';
        resultado.innerHTML = 'Valor 01 ou Valor 02 inválido. Digite um número.';

    } else {

        let valorLucro = (v1 - v2)

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Preço de venda: <strong>R$ ${v1.toFixed(2)}</strong></p>
        <p>Custo do produto: <strong>R$ ${v2.toFixed(2)}</strong></p>
        <p>Lucro obtido: <strong>R$ ${valorLucro.toFixed(2)}</strong></p>
        `
    };
};

function limpar(){
    resultado.style.display='none'
    input01.value='';
    input02.value='';
    input01.focus();
};