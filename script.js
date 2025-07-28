// Estrutura da fanfic interativa com finais mais dramáticos
const chapters = [
  {
    title: "Capítulo 1: O Jogo das Paixões",
    text: `O sinal tocou, anunciando o início de mais um dia no Colégio Estrela do Saber. Lucas, loiro de olhos castanhos melados e presidente do grêmio, caminhava com confiança. Ao seu lado, Wendriely, ruiva de batom vermelho, desviava olhares cobiçosos com um suspiro de tédio—até que algo (ou melhor, alguém) chamou sua atenção.<br><br>
Toninho, o primo bombado, passou por eles com uma bolsa de jiu-jitsu no ombro, suor brilhando no pescoço. Wendriely travou—literalmente—e seu caderno caiu no chão.<br><br>
Enquanto isso, Lucas via Gustavo, o garanhão do vôlei, se aproximando com um grupo de amigos.<br><br><b>O que acontece agora?</b>`,
    choices: [
      { text: 'Lucas chama Gustavo para uma reunião do grêmio (que nem existe).', next: 1, state: { rota: 'lucas' } },
      { text: 'Wendriely derrama suco em Toninho para ver ele sem camisa.', next: 1, state: { rota: 'wendriely' } },
      { text: 'O pai de Toninho aparece de carro esportivo e oferece carona.', next: 1, state: { rota: 'pai' } },
      { text: 'Lucas e Wendriely fogem para o banheiro e traçam um plano.', next: 1, state: { rota: 'fuga' } }
    ]
  },
  {
    title: "Capítulo 2: Jogadas Arriscadas",
    text: (state) => {
      switch(state.rota) {
        case 'lucas':
          return `Lucas intercepta Gustavo: "Ei, precisamos do seu apoio numa reunião do grêmio hoje. É sobre o torneio esportivo."<br>Gustavo ergue uma sobrancelha: "Reunião? Nunca vi você marcar uma."<br><br><b>Como Lucas reage?</b>`;
        case 'wendriely':
          return `Wendriely "acidentalmente" derrama suco em Toninho, manchando o uniforme branco.<br>"AI, desculpa! Deixa eu ajudar!"<br>Toninho segura seu pulso: "Tranquilo, princesa. Eu me viro."<br><br><b>O que Wendriely faz?</b>`;
        case 'pai':
          return `O pai de Toninho para o carro esportivo na frente da escola: "Alguém quer carona?"<br>Lucas fica dividido entre Gustavo e o Deus Careca.<br><br><b>O que acontece?</b>`;
        case 'fuga':
          return `Lucas e Wendriely fogem para o banheiro feminino.<br>"Precisamos de ajuda profissional", diz Wendriely.<br><br><b>Qual o plano?</b>`;
      }
    },
    choices: (state) => {
      switch(state.rota) {
        case 'lucas':
          return [
            { text: 'Inventa que é sigilosa: "Só os mais importantes foram chamados."', next: 2, state: { rota: 'lucas_sigilosa' } },
            { text: 'Fala a verdade: "É que eu queria te ver sozinho."', next: 2, state: { rota: 'lucas_verdade' } }
          ];
        case 'wendriely':
          return [
            { text: 'Insiste em limpar: "Eu causei, eu conserto!"', next: 2, state: { rota: 'wendriely_insiste' } },
            { text: 'Provoca: "Tem medo de eu ver seu tanquinho?"', next: 2, state: { rota: 'wendriely_provoca' } }
          ];
        case 'pai':
          return [
            { text: 'Lucas aceita a carona, mas Wendriely puxa ele pra trás.', next: 2, state: { rota: 'pai_lucas' } },
            { text: 'Gustavo provoca: "Tá afim do pai ou do filho, Lucas?"', next: 2, state: { rota: 'pai_gustavo' } }
          ];
        case 'fuga':
          return [
            { text: 'Wendriely finge que Toninho a assediou pra forçar um acidente romântico.', next: 2, state: { rota: 'fuga_assedio' } },
            { text: 'Pedem conselhos pro pai de Toninho (sim, ele atende no banheiro).', next: 2, state: { rota: 'fuga_conselho' } }
          ];
      }
    }
  },
  {
    title: "Capítulo 3: Segredos e Tretas",
    text: (state) => {
      switch(state.rota) {
        case 'lucas_sigilosa':
          return `Gustavo ri: "Se for furada, você me deve um café."<br>Lucas sente o clima esquentar.<br><br><b>O que Lucas faz?</b>`;
        case 'lucas_verdade':
          return `Gustavo sorri: "Honestidade é sexy, presidente."<br>Lucas fica sem palavras.<br><br><b>Como Lucas reage?</b>`;
        case 'wendriely_insiste':
          return `Toninho segura firme: "Se continuar assim, vou ter que tirar a camisa."<br>Wendriely sente o coração acelerar.<br><br><b>O que ela faz?</b>`;
        case 'wendriely_provoca':
          return `Toninho ri e tira a camisa: "Tá aí, ruivinha. Satisfeita?"<br>Metade da escola para pra olhar.<br><br><b>Como Wendriely reage?</b>`;
        case 'pai_lucas':
          return `Wendriely puxa Lucas: "Não rouba meu futuro sogro!"<br>O pai de Toninho ri.<br><br><b>O que Lucas faz?</b>`;
        case 'pai_gustavo':
          return `Gustavo sussurra: "Tá afim do pai ou do filho, Lucas?"<br>Lucas engasga.<br><br><b>Como Lucas responde?</b>`;
        case 'fuga_assedio':
          return `Toninho aparece: "Tá tudo bem?"<br>Wendriely improvisa um drama.<br><br><b>O que ela faz?</b>`;
        case 'fuga_conselho':
          return `O pai de Toninho atende: "Vem aqui em casa, eu ensino."<br>Lucas arregala os olhos.<br><br><b>O que eles decidem?</b>`;
      }
    },
    choices: (state) => {
      switch(state.rota) {
        case 'lucas_sigilosa':
          return [
            { text: 'Aceita o café e convida Gustavo para treinar a sós.', next: 3, state: { final: 'lucas_gustavo' } },
            { text: 'Foge do convite e inventa outra desculpa.', next: 3, state: { final: 'lucas_foge' } }
          ];
        case 'lucas_verdade':
          return [
            { text: 'Aproveita o clima e tenta beijar Gustavo.', next: 3, state: { final: 'lucas_beijo' } },
            { text: 'Fica nervoso e muda de assunto.', next: 3, state: { final: 'lucas_foge' } }
          ];
        case 'wendriely_insiste':
          return [
            { text: 'Ajuda Toninho a tirar a camisa.', next: 3, state: { final: 'wendriely_tira' } },
            { text: 'Fica tímida e desiste.', next: 3, state: { final: 'wendriely_timia' } }
          ];
        case 'wendriely_provoca':
          return [
            { text: 'Aproveita e faz pose com Toninho.', next: 3, state: { final: 'wendriely_pose' } },
            { text: 'Faz piada e sai andando.', next: 3, state: { final: 'wendriely_piada' } }
          ];
        case 'pai_lucas':
          return [
            { text: 'Lucas aceita a carona e senta ao lado do pai de Toninho.', next: 3, state: { final: 'pai_carona' } },
            { text: 'Lucas desiste e volta para Gustavo.', next: 3, state: { final: 'pai_gustavo' } }
          ];
        case 'pai_gustavo':
          return [
            { text: 'Lucas diz que prefere o filho.', next: 3, state: { final: 'pai_filho' } },
            { text: 'Lucas diz que prefere o pai.', next: 3, state: { final: 'pai_pai' } }
          ];
        case 'fuga_assedio':
          return [
            { text: 'Wendriely finge desmaio nos braços de Toninho.', next: 3, state: { final: 'fuga_desmaio' } },
            { text: 'Lucas entra no drama e pede socorro.', next: 3, state: { final: 'fuga_sos' } }
          ];
        case 'fuga_conselho':
          return [
            { text: 'Vão para a casa do pai de Toninho.', next: 3, state: { final: 'fuga_casa' } },
            { text: 'Desistem e vão comer chocolate.', next: 3, state: { final: 'fuga_chocolate' } }
          ];
      }
    }
  },
  {
    title: "Capítulo 4: Finais e Revelações",
    text: (state) => {
      // Finais dramáticos e trágicos
      const finais = {
        lucas_gustavo: `<b>O Ginásio do Destino</b><br>Lucas e Gustavo treinam a sós no ginásio vazio. Entre risadas e "táticas", o clima esquenta e eles se beijam. Mas, ao saírem, descobrem que o torneio era real e todos estavam esperando. O segredo deles vira fofoca, Lucas perde a presidência do grêmio, mas ganha o amor de Gustavo. O preço da paixão? O colégio nunca mais será o mesmo.<br><br><i>Às vezes, o amor exige coragem para enfrentar o mundo.</i>` ,
        lucas_beijo: `<b>O Beijo e o Escândalo</b><br>Lucas toma coragem e beija Gustavo. O time todo entra no ginásio e aplaude, mas a diretora vê tudo e ameaça expulsar os dois. Eles fogem juntos, deixando para trás o colégio, os amigos e o passado. O amor deles vira lenda urbana.<br><br><i>Nem todo final feliz é fácil, mas é verdadeiro.</i>` ,
        lucas_foge: `<b>O Silêncio do Presidente</b><br>Lucas inventa outra desculpa, mas Gustavo percebe e se afasta. Lucas termina o ano sozinho, sentindo o peso das oportunidades perdidas. No último dia de aula, encontra uma carta de Gustavo: "Quando quiser parar de fugir, me procura, presidente."<br><br><i>O tempo não volta, mas a saudade fica.</i>` ,
        wendriely_tira: `<b>O Tatame da Paixão</b><br>Wendriely ajuda Toninho a tirar a camisa. O pai de Toninho aparece e diz: "Aqui não é academia!" Mas pisca para ela, aprovando a ousadia. No entanto, a diretora vê a cena e suspende ambos. Eles passam dias afastados, mas se encontram escondidos no tatame, onde o amor floresce entre quedas e risos.<br><br><i>O amor desafia regras, mas encontra seu caminho.</i>` ,
        wendriely_timia: `<b>O Adeus Tímido</b><br>Wendriely fica tímida, mas Toninho segura sua mão: "Quando quiser tentar de novo, me chama." Ela sorri, mas o tempo passa e cada um segue seu caminho. Anos depois, ela vê Toninho na TV, campeão de jiu-jitsu, e se pergunta: "E se...?"<br><br><i>Algumas histórias ficam só na imaginação.</i>` ,
        wendriely_pose: `<b>O Meme do Século</b><br>Wendriely faz pose com Toninho, viralizando nas redes do colégio. O casal vira meme, mas a fama traz inveja e fofocas. Eles brigam, se afastam, mas no reencontro, percebem que a verdadeira conexão estava além das aparências.<br><br><i>O amor resiste até à internet.</i>` ,
        wendriely_piada: `<b>O Riso e a Solidão</b><br>Wendriely faz piada e sai andando, mas Toninho corre atrás dela, rindo. No entanto, um acidente no corredor separa os dois por semanas. Quando se reencontram, percebem que a vida é curta demais para não se declarar.<br><br><i>O destino sempre dá uma segunda chance.</i>` ,
        pai_carona: `<b>O Caminho Proibido</b><br>Lucas aceita a carona e descobre que o pai de Toninho é ainda mais charmoso de perto. Eles trocam olhares, mas um acidente de trânsito muda tudo. Lucas acorda no hospital, com Gustavo ao seu lado, e percebe que o amor verdadeiro estava mais perto do que imaginava.<br><br><i>Às vezes, é preciso perder para encontrar.</i>` ,
        pai_gustavo: `<b>O Time Certo</b><br>Lucas volta para Gustavo, que o recebe com um sorriso: "Sabia que você ia escolher o time certo." Mas a felicidade dura pouco: uma fofoca se espalha e eles precisam lutar juntos contra o preconceito. Unidos, tornam-se inspiração para outros alunos.<br><br><i>O amor é resistência.</i>` ,
        pai_filho: `<b>O Desafio Final</b><br>Lucas diz que prefere o filho. Toninho sorri e convida Lucas para um treino especial de jiu-jitsu. No tatame, entre quedas e confissões, nasce uma amizade forte e, quem sabe, algo mais. Mas o pai observa de longe, com um olhar misterioso.<br><br><i>Nem todo final é definitivo.</i>` ,
        pai_pai: `<b>O Escândalo do Ano</b><br>Lucas diz que prefere o pai. O colégio inteiro fica em choque, mas o pai de Toninho só ri: "Gosto de gente ousada!" A diretora, furiosa, ameaça expulsar Lucas, mas ele responde: "Prefiro ser expulso do que viver sem emoção."<br><br><i>Ousadia tem seu preço.</i>` ,
        fuga_desmaio: `<b>O Desmaio Fatal</b><br>Wendriely finge desmaio e Toninho a segura no colo. Mas, ao levá-la para a enfermaria, ela ouve uma conversa: Toninho vai se mudar de cidade. O "desmaio" vira despedida, e ela percebe que nunca disse o que sentia.<br><br><i>O amor, às vezes, é interrompido pelo destino.</i>` ,
        fuga_sos: `<b>O Grito no Corredor</b><br>Lucas pede socorro e o colégio inteiro aparece. No fim, todos caem na risada, mas a diretora não acha graça e suspende a dupla. Eles passam o resto do ano tramando novas aventuras, juntos na travessura e na amizade.<br><br><i>Algumas histórias não têm fim, só recomeço.</i>` ,
        fuga_casa: `<b>O Segredo do Tatame</b><br>Na casa do pai de Toninho, eles encontram os dois treinando jiu-jitsu sem camisa. O pai diz: "Aqui, quem luta junto, conquista junto." Mas, ao final do treino, uma revelação: o pai de Toninho era ex-campeão mundial, e convida Wendriely para treinar fora do país. Ela precisa escolher entre o amor e o sonho.<br><br><i>O futuro é feito de escolhas difíceis.</i>` ,
        fuga_chocolate: `<b>O Doce da Amizade</b><br>Eles desistem de tudo e vão comer chocolate, rindo das próprias confusões. Anos depois, se reencontram e percebem que, apesar de tudo, a amizade foi o maior prêmio.<br><br><i>O amor pode mudar, mas a amizade é eterna.</i>`
      };
      return `<div class='chapter'>${finais[state.final]}<br><br><b>Fim!</b></div>`;
    },
    choices: () => [
      { text: 'Reiniciar história', next: 0, state: {} }
    ]
  }
];

// Estado da história
let currentChapter = 0;
let currentState = {};

// IMAGENS UTILIZADAS:
// - img/capa.jpeg (Capa)

function startBook() {
  document.getElementById('cover-container').style.display = 'none';
  document.getElementById('story-container').style.display = '';
  renderChapter();
}

// Renderizar capítulo sem imagens (apenas texto)
function renderChapter() {
  const chapter = chapters[currentChapter];
  
  let text = typeof chapter.text === 'function' ? chapter.text(currentState) : chapter.text;
  let choices = typeof chapter.choices === 'function' ? chapter.choices(currentState) : chapter.choices;
  
  // Adicionar efeito de loading
  document.getElementById('story-container').innerHTML = `
    <div class="loading-chapter">
      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  
  // Simular carregamento e depois mostrar conteúdo
  setTimeout(() => {
    document.getElementById('story-container').innerHTML = `
      <div class="chapter-header">
        <h1>Amor e Confusão no Colégio</h1>
        <h2>${chapter.title}</h2>
        <div class="chapter-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((currentChapter + 1) / chapters.length) * 100}%"></div>
          </div>
          <span class="progress-text">Capítulo ${currentChapter + 1} de ${chapters.length}</span>
        </div>
      </div>
      <div class="chapter-content">
        <div class="chapter">${text}</div>
        <div class="choices">
          ${choices.map((c, i) => `
            <button class="choice-btn" onclick="chooseWithImg(${i})" data-choice="${i}">
              <span class="choice-number">${i + 1}</span>
              <span class="choice-text">${c.text}</span>
            </button>
          `).join('')}
        </div>
        ${currentChapter === chapters.length-1 ? '<div class="ate-proximo">🎉 Parabéns! Você completou a história! 🎉</div>' : ''}
      </div>
    `;
    
    // Texto aparece normalmente sem efeito de digitação
    const chapterText = document.querySelector('.chapter');
    if (chapterText) {
      chapterText.style.opacity = '0';
      setTimeout(() => {
        chapterText.style.opacity = '1';
      }, 100);
    }
  }, 800);
}

// Função de digitação
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Função para processar texto com HTML
function processTextWithHTML(text) {
  // Substituir <br> por quebras de linha reais
  text = text.replace(/<br>/g, '\n');
  // Substituir tags HTML por texto simples
  text = text.replace(/<b>(.*?)<\/b>/g, '$1');
  text = text.replace(/<i>(.*?)<\/i>/g, '$1');
  return text;
}

// Função para escolher opção
window.chooseWithImg = function(i) {
  const chapter = chapters[currentChapter];
  let choices = typeof chapter.choices === 'function' ? chapter.choices(currentState) : chapter.choices;
  const choice = choices[i];
  
  // Adicionar efeito de clique
  const button = document.querySelector(`[data-choice="${i}"]`);
  if (button) {
    button.style.transform = 'scale(0.95)';
    button.style.background = 'linear-gradient(135deg, #5a0711, #2d001a)';
    setTimeout(() => {
      button.style.transform = '';
      button.style.background = '';
    }, 200);
  }
  
  // Transição suave
  document.getElementById('story-container').style.opacity = '0';
  
  setTimeout(() => {
    currentChapter = choice.next;
    if (choice.state) {
      currentState = { ...currentState, ...choice.state };
    }
    renderChapter();
    document.getElementById('story-container').style.opacity = '1';
  }, 300);
}

window.startBook = startBook;

// Inicializar: mostrar só a capa
window.onload = function() {
  document.getElementById('cover-container').style.display = '';
  document.getElementById('story-container').style.display = 'none';
}; 