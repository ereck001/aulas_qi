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

    alert(`A primeira raiz é ${raizDelta}`)

}