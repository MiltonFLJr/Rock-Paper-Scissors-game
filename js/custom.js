
// FUNÇÃO PARA ESCOLHA DE OPÇÃO PRIMEIRO PLAYER
// FUNCTION FOR THE FIRST PLAYER COULD SELECT ROCK, PAPER OU SCISSOR

var score = 0;

function action(elementid){

if (elementid == 0){

  var elementsrc = document.getElementById("0").src;
    var elementclass = document.getElementById("0").className;

    var optionchoosed = document.getElementById("optionchoosed").src=elementsrc;
  var getclass = document.getElementById("optionchoosed").className=elementclass+" imgcustomheight";

  document.getElementById("containerops").style.display="none";

   document.getElementById("results").style.display="block";

}else if(elementid == 1){

var elementsrc = document.getElementById("1").src;
    var elementclass = document.getElementById("1").className;

    var optionchoosed = document.getElementById("optionchoosed").src=elementsrc;
  var getclass = document.getElementById("optionchoosed").className=elementclass+" imgcustomheight";

  document.getElementById("containerops").style.display="none";

   document.getElementById("results").style.display="block";

}else{

var elementsrc = document.getElementById("2").src;
    var elementclass = document.getElementById("2").className;

    var optionchoosed = document.getElementById("optionchoosed").src=elementsrc;
  var getclass = document.getElementById("optionchoosed").className=elementclass+" imgcustomheight";

  document.getElementById("containerops").style.display="none";

   document.getElementById("results").style.display="block";

}

var randomnumber = Math.floor(Math.random() * 3);

  secondplayer(randomnumber);

  result(elementid,randomnumber);

}


// FUNÇÃO PARA ESCOLHA DE OPÇÃO SEGUNDO PLAYER

function secondplayer(parameter){

var secondplayerop = parameter.toString(8);

var secondelement = document.getElementById(secondplayerop);

var secondelementsrc = secondelement.src;
var secondelementclass = secondelement.className;

var secondelementchoose = document.getElementById("second").src= secondelementsrc;
var secondelementclasses= document.getElementById("second").className = secondelementclass+" imgcustomheight";

}

//VITORIA OU DERROTA

function result(op1,op2) {

// TESOURA 

if(op1==0 && op2 ==0){

 var message = document.getElementById("message").innerHTML="DRAW";
 
}else if(op1==0 && op2 ==1){

var message = document.getElementById("message").innerHTML="YOU LOOSE";
score--;
document.getElementById("scorenumber").innerHTML=score;

}else if(op1==0 && op2 ==2){

var message = document.getElementById("message").innerHTML="YOU WIN";
score++;
document.getElementById("scorenumber").innerHTML=score;

}

//PEDRA

if(op1==1 && op2 ==0){

 var message = document.getElementById("message").innerHTML="YOU WIN";
score++;
document.getElementById("scorenumber").innerHTML=score;

}else if(op1==1 && op2 ==1){

var message = document.getElementById("message").innerHTML="DRAW";

}else if(op1==1 && op2 ==2){

var message = document.getElementById("message").innerHTML="YOU LOOSE";
score--;
document.getElementById("scorenumber").innerHTML=score;

}

//PAPEL

if(op1==2 && op2 ==0){

 var message = document.getElementById("message").innerHTML="YOU LOOSE";
score--;
document.getElementById("scorenumber").innerHTML=score;

}else if(op1==2 && op2 ==1){

var message = document.getElementById("message").innerHTML="YOU WIN";
score++;
document.getElementById("scorenumber").innerHTML=score;

}else if(op1==2 && op2 ==2){

var message = document.getElementById("message").innerHTML="DRAW";

}

}

//RETORNAR COM AS OPÇÕES

function retornaropções() {
document.getElementById("containerops").style.display="block";
document.getElementById("results").style.display="none";
}

// OCULTAR OS RESULTADOS

function ocultaresultadosregras(){

document.getElementById("results").style.display="none";
document.getElementById("modal").style.display="none";

}

//ABRIR MODAL COM AS REGRAS

function abrirmodal(){

document.getElementById("modal").style.display="block";
document.getElementById("placar").style.filter="brightness(50%)";
document.getElementById("containerops").style.filter="brightness(50%)";
document.getElementById("modalbutton").style.filter="brightness(50%)";
document.getElementById("results").style.filter="brightness(50%)";
}

//FECHAR MODAL

function fecharmodal(){
  document.getElementById("modal").style.display="none";
  document.getElementById("placar").style.filter="brightness(100%)";
document.getElementById("containerops").style.filter="brightness(100%)";
document.getElementById("modalbutton").style.filter="brightness(100%)";
document.getElementById("results").style.filter="brightness(100%)"
}
