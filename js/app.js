const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

const resultado = document.getElementById('resultado');

function calcularTotal (){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O valor total obtido foi ${v1*v2}R$ <p>
        `
    };
};

function desconto(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    desconto = (v1 * v2)/100

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Você recebeu um desconto de ${v2}% de ${v1}R$. Preço total pago foi ${v1-desconto}R$<p>
        `
    };
};

function juros(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    acrescimo = (v1 * v2)/100

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>O acréscimo percentual aplicado com base no valor 02 foi: ${acrescimo}R$. O valor total é: ${v1 + acrescimo}R$<p>
        `
    };
};

function comissao(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    percentual = (v1 * v2)/100

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>Você recebeu ${v2}% de comissão sobre o valor ${v1}. A comissão obtida foi ${percentual}R$<p>
        `
    };
};

function lucro(){
    const v1 =  parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    lucro = (v1 - v2)

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número.');

    } else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
        `
        <p>preco da venda  ${v1} custo ${v2}R$. O lucro obitido foi ${lucro}<p>
        `
    };
};

function limpar(){
    resultado.style.display='none'
    input01.value='';
    input02.value='';
    input01.focus();
};