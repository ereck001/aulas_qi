function calcular(){

    let valorAEnt = document.getElementById('valA');
    let valorBEnt = document.getElementById('valB');
    let valorCEnt = document.getElementById('valC');

    let resposta = document.getElementById('areaTexto');    

    let a = parseFloat(valorAEnt.value);
    let b = parseFloat(valorBEnt.value);
    let c = parseFloat(valorCEnt.value);

    const delta = b*b-4*a*c;

    let raizDelta = Math.sqrt(delta);

    let x1 = -b + raizDelta;
    let x2 = -b - raizDelta;

   

    resposta.innerText = `Uma raiz é ${x1} e a outra é ${x2}`
}