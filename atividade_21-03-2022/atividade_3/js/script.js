function calcular(){
    let nomeProduto = document.getElementById('nome-prod');
    let valUni = document.getElementById('val-uni');
    let quant = document.getElementById('quant');

    resposta = document.getElementById('areaTexto');

    
    let ValorUnitario = parseFloat(valUni.value);
    let quantidade = parseFloat(quant.value);
    let subtotal = ValorUnitario*quantidade;
    let valorTotal = subtotal + subtotal*0.01;

    resposta.innerText = `O valor unitário do produto ${nomeProduto.value} é R$${ValorUnitario.toFixed(2)}, a quantidade é ${quantidade}\n
    O valor total com o acrescimo de 3,5% e o desconto de 2,5% é ${valorTotal}`

}