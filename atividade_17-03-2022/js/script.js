let ent1 = document.getElementById("num1");
let ent2 = document.getElementById("num3");

let num1 = ent1.value;

function calcular() {
    let ent1 = document.getElementById("num1");
    let ent2 = document.getElementById("num2");
    let resposta = document.getElementById("areaTexto");

    let num1 = parseFloat(ent1.value);
    let num2 = parseFloat(ent2.value);

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let mod = num1 % num2;
    let pow = num1**num2;
    let sqrt = num1 **(1/num2);
     
    resposta.innerText = `A soma dos números ${num1} e ${num2} é ${soma}\n 
    A subtração de ${num1} por ${num2} é ${subtracao}\n
    A multiplicação dos números ${num1} e ${num2} é ${mult}\n
    A divisão de ${num1} por ${num2} é ${div}\n
    O resto da divisão de ${num1} por ${num2} é ${mod}\n
    A potência de ${num1} por ${num2} é ${pow}\n
    A raiz de ${num1} por ${num2} é ${sqrt}\n`;
   
}
