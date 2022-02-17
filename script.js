let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

// Capturar as areas e trazelas para variaveis
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Selecionar uma ordem para as cores
let shuffleOrder = () => {
  // Gera 4 ordens de cores aleatoriamente
  let colorOrder = Math.floor(Math.random() * 4);
  // Preenche o vetor com a core gerada
  order[order.length] = colorOrder;
  // Zera a sequencia de cliques
  clickedOrder = [];

  // Varre o vetor de orden e enfatizar a cor selecionada
  for(let i in order){
    // Chama a funçao para passa o elemento no indice i do array
    let elementColor = createColorElement(order[i]);
    // Função lightColor vai enfatizar a cor do elemento
    lightColor(elementColor, Number(i) + 1);
  }

}


// Função para enfatizar o brilho do elemento
let lightColor = (element, number) => {
  // Acerescenta o tempo
  number = number * 500;

  //Seta time 250 milisegundos
  setTimeout(() => {
    // Adiciona a classe ao elemento nesse intervalo de tempo
    element.clickedOrder.add('selected');
  }, number - 250);

  setTimeout(() => {
    // Remove a classe que adicionamos depois do tempo acima;
    element.clickedOrder.remove('selected');
  });

}

// Variavel para:
// Comparando a ordem do clique com a order estabelecida pelo jogo
let checkOrder = () => {

  // Roda um laço para os elementos
  for(let i in clickedOrder){
    // Testa se econtrou uma ordem errada
    if(clickedOrder[i] != order[i]){
      // Se encontro para o jogo e quebra o laço aqui
      gameOver();
      break;
    }

    // Se não clicou em nada errado, notifica o sucesso!
    if(clickedOrder.length == order.length){
      alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
      nextLevel();
    }

  }
}


//funcao para o clique do usuario
let click = (color) => {
  // Usando o clickedOrder que vai receber a cor que atribuimos na posição que clicamos
  clickedOrder[clickedOrder.length] = color;
  // Recebendo a classe selected na area clicada
  createColorElement(color).classList.add('selected');

  // Dá um tempo e depois tira a classe clicada
  setTimeout(() => {
      // Retira a classe da area clicada
      createColorElement(color).classList.remove('selected');
      checkOrder();
  },250);
}




//funcao que retorna a cor da area 
let createColorElement = (color) => {
  if(color == 0) {
      return green;
  } else if(color == 1) {
      return red;
  } else if (color == 2) {
      return yellow;
  } else if (color == 3) {
      return blue;
  }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
  // Aumenta o score
  score++;
  // emabaralha a ordem novamente
  shuffleOrder();
}

//funcao para game over
let gameOver = () => {
  // Notifica a perda do jogo
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
  // Zera tudo novamente antes de começar
  order = [];
  clickedOrder = [];
  // Começa o jogo
  playGame();
}

//funcao de inicio do jogo
let playGame = () => {
  // Notifica o inicio do jogo
  alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
  // Começa com o score )
  score = 0;
  // Chama função proximo nivel
  nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();