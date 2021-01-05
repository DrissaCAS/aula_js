function clicou(){
   document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
   console.log(document.getElementById("agradecimento")); 
    //alert("Obrigada por clicar!");
}

function redirection(){
    window.open("https://digitalinnovation.one/sign-up?ref=TQGOYNU5LQ");
    //window.location.href = "https://digitalinnovation.one/sign-up?ref=TQGOYNU5LQ";
}

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse.</b>";
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse."
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui."
}
function funcaoChange(elemento){
    console.log(elemento.value); 
}

/*function soma(n1, n2){
    return n1 + n2;
};
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
};

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

//alert(soma(5, 10));

/*var d = new Date();
alert(d.gets());*/

/*var count;
for(count = 5; count >= 0; count--){
    alert(count);
};*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};*/

/*var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};*/

/*var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"verde"}]; 
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maçã", "banana", "uva", "melão"];
//lista.push("laranja");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());

//console.log(lista.toString());
//console.log(lista.join(" - "));

/*var nome = "Drissa CAS";
var idade = 25;
var idade2 = 10;
var frase = "Japão é o lugar mais lindo do mundo."
//alert(nome + " tem " + idade + " anos.");
//alert(idade+idade2);
console.log(nome);
console.log(idade);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Portugal"));
alert(frase.replace("Japão", "Brasil"));*/