const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal (){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        let total = v1 * v2;

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O valor total obtido foi R$ ${total.toFixed(2)} </p>
        `
    };
};

function desconto(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        let desconto = (v1 * v2) / 100;
        let total = v1 - desconto;

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Você recebeu ${v2}% de desconto sobre R$ ${v1.toFixed(2)}.</p>
        <p>Preço final: R$ ${total.toFixed(2)}</p>
        `
    };
};

function juros(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        let acrescimo = (v1 * v2)/100
        let total = v1 + acrescimo

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O acréscimo percentual aplicado com base no valor 02 foi: R$ ${acrescimo}. </p>
        <p>O valor total é: R$${total.toFixed(2)}.</p>
        `
    };
};

function comissao(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);


    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        let percentual = (v1 * v2)/100

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Você recebeu ${v2}% de comissão sobre o valor R$ ${v1.toFixed(2)}. A comissão obtida foi R$ ${percentual.toFixed(2)} </p>
        `
    };
};

function lucro(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {

        let valorLucro = (v1 - v2)

        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O preço da venda de um produto produto foi R$ ${v1.toFixed(2)} e o custo foi de R$ ${v2.toFixed(2)}.</p> 
        <p>O lucro obtido foi ${valorLucro.toFixed(2)}.</p>
        `
    };
};

function limpar(){
    resultado.style.display='none'
    input01.value='';
    input02.value='';
    input01.focus();
};