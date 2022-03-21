function calcular(){
    let salarioBaseEnt = document.getElementById('valA');
    

    resposta = document.getElementById('areaTexto');

    let salarioBase = parseFloat(salarioBaseEnt.value);    
    let gratificacao = salarioBase * 0.05;
    let salarioBruto  = salarioBase + gratificacao;
    let salarioLiquido = salarioBruto - (salarioBruto*0.07);

    resposta.innerText = `O salário a receber é R$${salarioLiquido.toFixed(2)}`
    

}