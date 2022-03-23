var switchCtt = document.getElementById('contato').style;

var novaDiv = document.createElement('div');
novaDiv.id = "cortina";
novaDiv.onclick = 'cancelar()';
novaDiv.style = "width:100%;height:100%;background-color:rgba(0,0,0,0.7);position:absolute;"


function showCtt(){   
    
    switchCtt.display = 'flex';    
    document.body.appendChild(novaDiv);
    document.getElementById('cortina').style.display = 'flex';
    document.getElementById('cortina').style.zIndex = '1';

}
function cancelar(){
    switchCtt.display = 'none';
    document.getElementById('cortina').style.display = 'none';
}