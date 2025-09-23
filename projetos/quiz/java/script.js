document.addEventListener('DOMContentLoaded', () => {
  updateQuestion(); // Inicializa o quiz após carregar o DOM
});

const questions = [
    {
      question: "Qual qualidade você mais valoriza no seu trabalho?",
      options: [
        "Pensamento lógico e tomada rápida de decisões",
        "Aparência e apresentação pessoal",
        "Determinação e esforço constante",
        "Força e resistência para enfrentar desafios"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400"
    },
    {
      question: "Como você prefere trabalhar em equipe?",
      options: [
        "Trabalhando independentemente, com pouca colaboração",
        "Trabalhando colaborativamente, compartilhando ideias e responsabilidades"
      ],
      image: "https://febracis.com/wp-content/uploads/2022/10/trabalho-em-equipe.jpg"
    },
    {
      question: "Em qual ambiente você se sente mais produtivo?",
      options: [
        "Em espaços abertos, ao ar livre",
        "Em ambientes calmos, próximo à água",
        "Em ambiente doméstico, com organização",
        "Em lugares mais frios e desafiadores"
      ],
      image: "https://cdn.prod.website-files.com/66351b9f531bf70f210e21e5/66351b9f531bf70f210e2776_papeis-de-negocios-de-natureza-morta-com-varias-pecas-de-mecanismo-scaled.webp"
    },
    {
      question: "Que tipo de comida melhor reflete sua rotina de trabalho?",
      options: [
        "Uma refeição robusta e energética",
        "Refeições leves e rápidas",
        "Uma dieta equilibrada com frutas e vegetais",
        "Algo doce, como um pequeno prazer"
      ],
      image: "https://cdn.wizard.com.br/wp-content/uploads/2016/12/24153339/como-falar-as-comidas-das-principais-refeicoes-do-seu-dia-em-ingles.jpg"
    },
    {
      question: "Como você se comporta em reuniões ou discussões em grupo?",
      options: [
        "Sou extrovertido e adoro interagir com todos",
        "Sou mais equilibrado, gosto de ouvir e compartilhar quando necessário",
        "Prefiro ficar reservado e introspectivo"
      ],
      image: "https://www.protagonizecursos.com.br/wp-content/uploads/2021/05/introvert-e-exrtavert.jpg"
    },
    {
      question: "Qual cor melhor reflete sua atitude no trabalho?",
      options: [
        "Vermelho, simbolizando paixão e liderança",
        "Azul, transmitindo confiança e serenidade",
        "Amarelo, representando energia e otimismo",
        "Preto ou branco, expressando objetividade"
      ],
      image: "https://cdn.colab55.com/images/1584396681/u/como-usar-o-circulo-cromatico-para-escolher-as-cores-na-decoracao-share.png"
    },
    {
      question: "Quando um colega precisa de ajuda, como você reage?",
      options: [
        "Ofereço suporte emocional",
        "Acredito que cada um deve resolver seus problemas",
        "Tento encontrar soluções práticas",
        "Procuro alguém mais experiente"
      ],
      image: "https://www.telavita.com.br/blog/wp-content/uploads/2019/07/ajudar-o-proximo-1.jpg"
    },
    {
      question: "O que você mais aprecia durante seu dia de trabalho?",
      options: [
        "Momentos de descanso e relaxamento",
        "O prazer de completar tarefas com dedicação",
        "O sentimento de produtividade em equipe",
        "A satisfação de completar tarefas difíceis"
      ],
      image: "https://s2-valor.glbimg.com/V7H_1YBDc-Jh8g7sWIYf4n3F73w=/0x0:6000x4004/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2024/z/Y/ySCF4qSEC9lX0ilrsFeQ/pexels-fauxels-3183150.jpg"
    },
    {
      question: "Você é mais focado na rotina ou gosta de aventuras?",
      options: [
        "Prefiro rotina e estabilidade",
        "Gosto de sair da rotina e buscar novidades"
      ],
      image: "https://educasc.com.br/wp-content/uploads/2022/06/iStock-1297014288-600x400.webp"
    },
    {
      question: "Qual sua postura sobre desafios e competição no trabalho?",
      options: [
        "Sou extremamente competitivo",
        "Encaro a competição com equilíbrio",
        "Prefiro focar no meu desenvolvimento",
        "Evito competições"
      ],
      image: "https://marcusmarques.com.br/wp-content/uploads/2023/02/desafios.jpg"
    },

    {
      question: "Como você lida com imprevistos no trabalho?",
      options: [
        "Mantenho a calma e analiso a situação antes de agir",
        "Adoto uma abordagem direta, enfrentando o problema imediatamente",
        "Peço ajuda de colegas ou superiores para encontrar a melhor solução",
        "Tento resolver sozinho, sem depender dos outros"
      ],
      image: "https://etalent.com.br/wp-content/uploads/2022/08/Artigo-Ambiente-toxico4.jpg"
    },

    {
      question: "Qual é a sua prioridade ao assumir um novo projeto?",
      options: [
        "Entregar resultados de alta qualidade, mesmo que isso exija mais tempo e esforço",
        "Finalizar rapidamente, focando na eficiência",
        "Criar algo inovador e surpreendente, saindo do óbvio",
        "Garantir que todos da equipe estejam alinhados e motivados"
      ],
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8n4PKEXDxFA-ZGaOq5Y93s_U3d3H7uPUBBMbVx7clnaq8gH1bSykydwJVIZzlqciD-otMjEgDaYgsFNdubsm4FUQl0CwUfiWuENiy9nZ3ChB0uKiJA4jliU7VlTqdH5AXCpFzNbPVYbMn/s1466/Como+conseguir+lidar+com+as+prioridades+j%25C3%25A1+definidas.png"
    }
  ];
  
  const animals = {
    "Leão": { points: 0, emoji: "🦁", description: "Líder natural com carisma e força" },
    "Lobo": { points: 0, emoji: "🐺", description: "Pensador estratégico que valoriza lealdade e trabalho em equipe" },
    "Formiga": { points: 0, emoji: "🐜", description: "Trabalhador e incrivelmente organizado" },
    "Cachorro": { points: 0, emoji: "🐕", description: "Leal e amigável, sempre pronto para ajudar" },
    "Gato": { points: 0, emoji: "🐱", description: "Solucionador de problemas independente e gracioso" },
    "Coelho": { points: 0, emoji: "🐰", description: "Mente rápida e alma gentil" },
    "Peixe": { points: 0, emoji: "🐟", description: "Adaptável e segue o fluxo" },
    "Urso": { points: 0, emoji: "🐻", description: "Presença poderosa e protetora" },
    "Gorila": { points: 0, emoji: "🦍", description: "Inteligente e fisicamente capaz" },
    "Tubarão": { points: 0, emoji: "🦈", description: "Focado e determinado a alcançar objetivos" }
  };
  
  let currentQuestion = 0;
  
  function startQuiz() {
    document.getElementById('start-menu').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    currentQuestion = 0;
    updateQuestion();
  }
  
  function updateQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    
    let imageContainer = document.querySelector('.question-image');
    if (!imageContainer) {
      imageContainer = document.createElement('div');
      imageContainer.className = 'question-image';
      document.querySelector('.question-container').insertBefore(imageContainer, document.getElementById('question'));
    }
    imageContainer.innerHTML = `<img src="${question.image}" alt="Ilustração da questão" class="quiz-image">`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option';
      button.textContent = option;
      button.onclick = () => handleAnswer(index);
      optionsContainer.appendChild(button);
    });
  
    // Update progress bar
    document.querySelector('.progress').style.width = `${(currentQuestion / questions.length) * 100}%`;
    
    // Update question counter
    document.getElementById('current-number').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
  }
  
  function handleAnswer(optionIndex) {
    const animalsList = Object.keys(animals);
    animalsList.forEach(animal => {
      if (Math.random() < 0.3) {
        animals[animal].points += Math.random() * 2;
      }
    });
  
    currentQuestion++;
    
    if (currentQuestion >= questions.length) {
      showResult();
    } else {
      updateQuestion();
    }
  }
  
  function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.querySelector('.question-counter').style.display = 'none';  
    document.querySelector('.progress-bar').style.display = 'none';      
    
    const winner = Object.entries(animals).reduce((a, b) => 
      a[1].points > b[1].points ? a : b
    )[0];
    
    document.getElementById('animal-name').textContent = winner;
    document.getElementById('animal-emoji').textContent = animals[winner].emoji;
    document.getElementById('description').textContent = animals[winner].description;
  }
  
  function restartQuiz() {
    // Reset all animal points
    Object.keys(animals).forEach(animal => {
      animals[animal].points = 0;
    });
    
    // Reset display
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.querySelector('.question-counter').style.display = 'block';  
    document.querySelector('.progress-bar').style.display = '';      
    
    // Reset progress
    currentQuestion = 0;
    document.querySelector('.progress').style.width = '0%';
    
    // Update question
    updateQuestion();
  }
  
  function returnToHome() {
    // Reset all animal points
    Object.keys(animals).forEach(animal => {
      animals[animal].points = 0;
    });
    
    // Reset displays
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
    
    // Reset progress
    currentQuestion = 0;
    document.querySelector('.progress').style.width = '0%';
  }
  
  // Start the quiz
  updateQuestion();