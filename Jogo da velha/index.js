
let jogador = "X";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

let body = document.getElementById("body");
let parabens ;



function jogada(casa) {
    if (casa.innerHTML === ""){
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }
        
}
function alterna_jogador() {
    if (jogador === "X"){
        jogador = "O";
    }else{
        jogador = "X";
    }
}

function verifica_ganhador() {
    if (casa01.innerHTML!="" && casa01.innerHTML===casa02.innerHTML && casa01.innerHTML=== casa03.innerHTML){
        alert(`Temos uma ganhador: ${casa01.innerHTML}`);
        body.style.animation = "changeBackgroundColor 1s infinite";
        
   
    }else if(casa01.innerHTML!="" && casa01.innerHTML===casa04.innerHTML && casa01.innerHTML=== casa07.innerHTML){
        alert(`Temos uma ganhador: ${casa01.innerHTML}`);
        body.style.animation = "changeBackgroundColor 1s infinite";
    }
    else if(casa01.innerHTML!="" && casa01.innerHTML===casa05.innerHTML && casa01.innerHTML=== casa09.innerHTML){
        alert(`Temos uma ganhador: ${casa01.innerHTML}`);
        body.style.animation = "changeBackgroundColor 1s infinite";

    }
    else if(casa02.innerHTML!="" && casa02.innerHTML===casa05.innerHTML && casa02.innerHTML=== casa08.innerHTML){
        alert(`Temos uma ganhador: ${casa02.innerHTML}`)
        body.style.animation = "changeBackgroundColor 1s infinite";

    }
    else if(casa03.innerHTML!="" && casa03.innerHTML===casa06.innerHTML && casa03.innerHTML=== casa09.innerHTML){
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        body.style.animation = "changeBackgroundColor 1s infinite";

    }
    else if(casa04.innerHTML!="" && casa04.innerHTML===casa05.innerHTML && casa04.innerHTML=== casa06.innerHTML){
        alert(`Temos uma ganhador: ${casa04.innerHTML}`)
        body.style.animation = "changeBackgroundColor 1s infinite";

    }
    else if(casa03.innerHTML!="" && casa03.innerHTML===casa05.innerHTML && casa03.innerHTML=== casa07.innerHTML){
        alert(`Temos uma ganhador: ${casa03.innerHTML}`)
        body.style.animation = "changeBackgroundColor 1s infinite";

    }
    else if(casa07.innerHTML!="" && casa07.innerHTML===casa08.innerHTML && casa07.innerHTML=== casa09.innerHTML){
        alert(`Temos uma ganhador: ${casa07.innerHTML}`)
        body.style.animation = "changeBackgroundColor 1s infinite";

    } else if(casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != "" && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != ""){
        alert("DEU VELHA!!!");
        document.getElementById("veia").style.display = "block";
        document.getElementById("main").style.display = "none";
        document.getElementById("veia").style.position = "absoute";
        document.getElementById("veia").style.display = "height: 100%";
        document.getElementById("veia").style.display = "width: 100%";
        document.getElementById("veia").style.animation = "moveToLeft 2s linear ";
        document.getElementById("empate").style.display = "block";
        document.getElementById("empate").style.position = "absoute";
    }
}