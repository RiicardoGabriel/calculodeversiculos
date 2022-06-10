function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    if (diaF % 2 === 0) {
        return 'Gabriel';
    }
    else {
        return 'Vitória';
    } 
}

function creatEle (quant) {
    for (let i = 0; i < quant; i += 1) {
        document.body.appendChild(document.createElement('input')).classList.add('inputs');
    }
    const selectAll = document.querySelectorAll('.inputs')
    if (selectAll[0]) {
    selectAll[0].placeholder = 'Primeiro capítulo';
    selectAll[0].setAttribute('type', 'number')
}
    if(selectAll[1]) {
    selectAll[1].placeholder = 'Segundo capítulo';
    selectAll[1].setAttribute('type', 'number')
}
    if(selectAll[2]) {
    selectAll[2].placeholder = 'Terceiro capítulo';
    selectAll[2].setAttribute('type', 'number')
}
    if(selectAll[3]) {
    selectAll[3].placeholder = 'Quarto capítulo';
    selectAll[3].setAttribute('type', 'number')
}
    if(selectAll[4]) {
    selectAll[4].placeholder = 'Quinto capítulo';
    selectAll[4].setAttribute('type', 'number')
}
}

const calcule = () => {
    const spanCalc = document.querySelector('#calculo');
    const btnCalcular = document.createElement('button');
    btnCalcular.innerText = 'Calcule'
    spanCalc.appendChild(btnCalcular);
}

const spanCalc = document.querySelector('#calculo');
spanCalc.addEventListener('click', () => {
    const quantInputs = document.getElementsByClassName('inputs').length;
    const elements = document.getElementsByClassName('inputs');
    if (quantInputs === 2) {
        const sum = parseInt(elements[0].value) - parseInt(elements[1].value);
        const calc = sum / 2
        alert(Math.floor(calc));
}
    if (quantInputs === 3) {
        const sumImpares = parseInt(elements[0].value) + parseInt(elements[2].value);
        const sumPares = parseInt(elements[1].value)
        const calc = sumImpares - sumPares;
        const result = calc / 2;
        alert(`Quem começa a ler hoje é ${dataAtualFormatada()} ${Math.floor(result)}`);
}
    if (quantInputs === 4) {
        const sumImpares = parseInt(elements[0].value) + parseInt(elements[2].value);
        const sumPares = parseInt(elements[1].value) + parseInt(elements[3].value);
        const calc = sumImpares - sumPares;
        alert(Math.floor(calc));
}
    if (quantInputs === 5) {
        const sumImpares = parseInt(elements[0].value) + parseInt(elements[2].value) + parseInt(elements[4].value);
        const sumPares = parseInt(elements[1].value) + parseInt(elements[3].value);
        const calc = sumImpares - sumPares;
        alert(Math.floor(calc));
}
})

const refreshPage = () => {
    const err = document.querySelector('#error')
    err.innerHTML = 'Adicione a quantidade de capítulos entre 2 e 5';
    const btn = document.createElement('button');
    btn.innerText = 'Tente novamente'
    err.appendChild(btn);
    btn.addEventListener('click', () => {
        document.location.reload(true);
    })
}

const inicioQuant = () => {
    const quantidade = prompt('Digite a quantidade de capítulos', '2 - 5');
    if (quantidade >= 2 && quantidade <= 5) {
        creatEle(quantidade);
        calcule();
    }
    else {
        refreshPage();
    }
}

window.onload = () => {
    inicioQuant();
};