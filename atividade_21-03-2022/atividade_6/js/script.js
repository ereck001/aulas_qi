function calcular(){
   
    let valorEnt = document.getElementById('valor');
    resposta = document.getElementById('areaTexto');
    
    let valor = parseInt(valorEnt.value);
    let resultado;

    if(valor%2==0 && valor!=0){
        resultado = 'O valor é par';

    }else if(valor==0){
        resultado = null;
        alert('Valor nulo, informe outro valor! ')

    }else{

        resultado = 'O valor é impar';
        
    }

    resposta.innerText = resultado;
    
    

}