function calcular(){
    let ra = document.getElementById('ra');
    let nota1Ent = document.getElementById('nota-1');
    let nota2Ent = document.getElementById('nota-2');
    let nome = document.getElementById('nome');

    resposta = document.getElementById('areaTexto');

    
    let nota1 = parseFloat(nota1Ent.value);
    let nota2 = parseFloat(nota2Ent.value);
    let media = (nota1+nota2)/2;
    if (ra.value == '' || nota1 == '' || nota2 =='' || nome.value ==''){
        alert('Preeencha todos os campos!')
        
    }else{
        resposta.innerText = `${nome.value}, ${media >= 6? 'Parabéns,você foi aprovado(a)!': 'Infelizmente você foi reprovado(a)'}, sua média é ${media}`
    }
    

}