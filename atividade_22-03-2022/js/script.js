function trocar(){
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let div = document.getElementById("quad").style;
    div.margin = 'auto'
    div.backgroundColor = `rgb(${red},${green},${blue})`
}