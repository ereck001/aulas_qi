function calcular(){
   
    let valorEnt = document.getElementById('valor');
    resposta = document.getElementById('areaTexto');
    
    let valor = parseFloat(valorEnt.value);
    let resultado;

    if(valor > 0 ){
        resultado = `O valor ${valor} é positivo`;

    }else if(valor < 0 ){
        resultado = `O valor ${valor} é negativo`;
    }else{
        resultado = null;
        alert('Valor nulo, informe outro valor! ')
    }

    resposta.innerText = resultado;
    
    

}