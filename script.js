// idade for maior do que 21 anos e for menos 55
// o valor do emprestimo deve ser de no maximo até 5 vezes o salario
 let botao = document.querySelector(".botao");

let nome;
let idade;
let salario;
let emprestimo;

function pedirEmprestimo(){
    nome = prompt("Qual é o seu nome?");
    idade = prompt("Olá " + nome + ", qual é sua idade?");
    salario = prompt("Quanto você ganha?");
    emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

    if(isNaN(salario)){
        alert("Salario inválido, recarregue o navegador e tente novamente!");
    }
    else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
            botao.style.backgroundColor="green";
            botao.innerHTML= "Aprovado";
            surpresa.style.display ="flex";
        }
        else{
            botao.style.backgroundColor="red";
            botao.innerHTML="Recusado, tente novamente !";
        }
    }
botao.onclick = pedirEmprestimo;





// function blabla(){
//     let nome= "Lucas"
// }






let senha;
let contador = 0; 


for (contador=0; contador==3; contador++){
    senha = prompt("digite sua senha");
}





// while (contador<3){
// senha = prompt("digite sua senha");
// contador++; 
// }























