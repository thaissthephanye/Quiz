import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Box, Container, Button, Typography } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import theme from "./theme";
import Quiz from "./components/Quiz";
import BodyMap from "./components/BodyMap";
import MusicPlayer from "./components/MusicPlayer";

const questions = [
  {
    id: 1,
    question: "Onde foi nosso primeiro beijo?",
    options: ["No NASF", "Na calçada do prédio", "No mercado", "No estágio"],
    answer: 1,
    partToUnlock: "eyes",
    funFact: "Foi no Dia dos Namorados! Você era tão tímido bixinho",
  },
  {
    id: 2,
    question:
      "O que estávamos fazendo no nosso primeiro encontro no dia dos namorados?",
    options: [
      "Jantando",
      "Preparando piquenique para amigos",
      "Vendo filme",
      "Tomando açaí",
    ],
    answer: 1,
    partToUnlock: "hands",
    funFact:
      "Ajudamos a montar o piquenique de Beca e Maicon - já parecíamos um casal! 🧺",
  },
  {
    id: 3,
    question: "Como comecei nossa conversa no Instagram?",
    options: [
      "Respondi seu story",
      "Story do seu cachorro",
      "Fui atirada e disse que vc era uma delicia",
      "Não lembro",
    ],
    answer: 0,
    partToUnlock: "lips",
    funFact: "Tive que ser atacante pois você nem tava ligando pra mim",
  },
  {
    id: 4,
    question: "Qual música tocava quando você me pediu em namoro?",
    options: [
      "Cinnamon Girl - Lana Del Rey",
      "Blinding Lights - The Weeknd",
      "Chorei na Vaquejada eu chorei",
      "Não tinha música",
    ],
    answer: 0,
    partToUnlock: "ears",
    funFact:
      "A Lana Del Rey foi nossa cupida - agora toda vez que eu ouço, volto aquele momento mágico! 🎵",
  },
  {
    id: 5,
    question: "Quem disse que você era feito pra mim?",
    options: ["Minha mãe", "Minha amiga Kaillany", "Sua amiga Anabel", "Gabi"],
    answer: 1,
    partToUnlock: "heart",
    funFact:
      "Ela viu antes de nós - às vezes as pessoas enxergam o que o coração demora a entender! 💘",
  },
  {
    id: 6,
    question: "O que eu fazia quando nos conhecemos?",
    options: [
      "Faculdade de Nutrição",
      "Técnico em Nutrição",
      "Trabalhava",
      "Outro curso",
    ],
    answer: 1,
    partToUnlock: "brain",
    funFact:
      "Você era o fisioterapeuta que todo mundo admirava, e eu só a estagiária michuruca! 🥼",
  },
  {
    id: 7,
    question: "Qual foi nosso primeiro date romântico?",
    options: [
      "Jantar à luz de velas",
      "Piquenique no parque",
      "Açaí",
      "Cinema",
    ],
    answer: 2,
    partToUnlock: "stomach",
    funFact:
      "Você tava com a camisa do Killua que hoje é minha - eu não lembro bem mas acho que foi isso",
  },
  {
    id: 8,
    question: "O que mais me emocionou no início do namoro?",
    options: [
      "Seu jeito paciente",
      "Como se atenta aos detalhes",
      "Seu abraço terapêutico",
      "Tudo junto",
    ],
    answer: 3,
    partToUnlock: "arms",
    funFact:
      "Seu abraço conserta meus dias ruins melhor que qualquer código compilado! 🤗",
  },
];

const bodyParts = {
  eyes: {
    name: "Olhos",
    message:
      "Lembro como te olhei no dia que nos encontramos de verdade, lembro do seu olhar atrás daquele oclinho",
    position: { top: "43%", left: "25%" },
    icon: "👀",
  },
  hands: {
    name: "Mãos",
    message:
      "As mesmas mãos que montavam o piquenique de Beca e Maicon no Dia dos Namorados, agora montam nosso futuro juntos. Cada linha delas conta nossa história melhor que qualquer código",
    position: { top: "59%", left: "26%" },
    icon: "🤲",
  },
  lips: {
    name: "Lábios",
    message:
      "Nunca imaginei que uma mensagem grudaria meus lábios nos seus por tanto tempo (pra sempre)!",
    position: { top: "15%", left: "56%" },
    icon: "💋",
  },
  ears: {
    name: "Ouvidos",
    message:
      "Guardo como tesouro o dia que que você me pediu em namoro, o som de chuva e Lana Del Rey foi extremamente marcante",
    position: { top: "16%", left: "36%" },
    icon: "👂",
  },
  heart: {
    name: "Coração",
    message:
      "Minha amiga viu antes de mim - você realmente era feito pra mim. Meu coração REALMENTE começou a bater mais forte quando te vi",
    position: { top: "25%", left: "65%" },
    icon: "❤️",
  },
  brain: {
    name: "Cérebro",
    message: "Naquele dia que te vi meu cérebro só pensava em ter você",
    position: { top: "13%", left: "46%" },
    icon: "🧠",
  },
  stomach: {
    name: "Estômago",
    message:
      "Nossos primeiros dates de açaí foram incríveis, todos os nossos dates de comer são incríveis kkk sejam eles em casa cozinhando ou saindo para comer",
    position: { top: "58%", left: "67%" },
    icon: "🍽️",
  },
  arms: {
    name: "Braços",
    message:
      "Seu abraço de fisioterapeuta tem poderes mágicos - cura minhas dores de código, frustrações do dia e até TPM. É meu 'npm install' humano que resolve todas as dependências emocionais.",
    position: { top: "30%", left: "28%" },
    icon: "💪",
  },
};

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [unlockedParts, setUnlockedParts] = useState([]);
  const [score, setScore] = useState(0);
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState("");

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (finalScore, partsUnlocked) => {
    setScore(finalScore);
    setUnlockedParts(partsUnlocked);
    setQuizCompleted(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MusicPlayer />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #121212 0%, #1e1e1e 100%)",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          {!quizStarted ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 4,
              }}
            >
              <Typography variant="h1" component="h1">
                2 Anos de Amor
              </Typography>
              <Typography variant="h1" component="h1">
                Fábio & Thais
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: "600px" }}>
                Um presente especial que combina nosso amor com algo que eu sei
                fazer (código). Complete o quiz para desbloquear memórias
                especiais do nosso amor em cada parte do corpo, coisa que um
                fisioterapeuta manja 👍!
              </Typography>

              <Button
                variant="contained"
                size="large"
                startIcon={<CelebrationIcon />}
                onClick={handleStartQuiz}
                sx={{
                  mt: 4,
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                }}
              >
                Começar Nossa Jornada
              </Button>
            </Box>
          ) : !quizCompleted ? (
            <Quiz questions={questions} onComplete={handleQuizComplete} />
          ) : (
            <BodyMap
              bodyParts={bodyParts}
              unlockedParts={unlockedParts}
              score={score}
              totalQuestions={questions.length}
              quizCompleted={false}
              showFunFact={showFunFact}
              currentFunFact={currentFunFact}
              setShowFunFact={setShowFunFact}
            />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
