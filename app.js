alert('Boas vindas ao jogo do número secreto');
let nome = prompt('Digite seu nome: ');
alert(`Bem vindo, ${nome}`);
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`${nome}, Escolha um número entre 1 e 100`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`${nome}, O número secreto é menor que ${chute}`);
        } else {
            alert(`${nome}, O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

if (tentativas > 1) {
     alert(`${nome}, Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        alert(`${nome}, Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
 }
