document.getElementById("button_altera_img").onclick = function() {
    let imagem = document.getElementById("image1");
    imagem.src = "sonic.jpg"; // Substitua por outra imagem
}

document.getElementById("button_altera_title").onclick = function() {
    let text = document.getElementById("titulo");
    text.innerText = "Sonic"; // Substitua por outra imagem
}
document.getElementById("button_altera_phrase").onclick = function() {
    let text = document.getElementById("texto");
    text.style.color='pink'; // Substitua por outra imagem
}
document.getElementById("button_toggle").onclick = function() {
    let button1 = document.getElementById("button_toggle");
    let button2 = document.getElementById("cobaia1");
    let button3 = document.getElementById("cobaia2");


  button1.classList.toggle("button_color");
  button2.classList.toggle("button_color");
  button3.classList.toggle("button_color")

}

document.getElementById("button_audio").onclick = function(){
    let audio= document.getElementById("audio");
    audio.play()
}