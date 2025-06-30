import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  LinearProgress,
} from "@mui/material";

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [unlockedParts, setUnlockedParts] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFunFact, setCurrentFunFact] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
      setUnlockedParts([...unlockedParts, currentQuestion.partToUnlock]);
      setCurrentFunFact(currentQuestion.funFact);
      setShowFunFact(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowFunFact(false);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(score, unlockedParts);
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto" }}>
      <LinearProgress
        variant="determinate"
        value={((currentQuestionIndex + 1) / questions.length) * 100}
        sx={{ mb: 4, height: 8, borderRadius: 4 }}
      />

      <Card>
        <CardContent sx={{ py: 4, px: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
            {currentQuestion.question}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              mt: 2,
            }}
          >
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === index ? "contained" : "outlined"}
                color={
                  selectedOption === index
                    ? isCorrect
                      ? "primary"
                      : "error"
                    : "inherit"
                }
                onClick={() => !selectedOption && handleAnswer(index)}
                disabled={selectedOption !== null && selectedOption !== index}
                sx={{ py: 2, fontSize: "1rem", justifyContent: "flex-start" }}
              >
                {option}
              </Button>
            ))}
          </Box>

          {showFunFact && (
            <Box
              sx={{
                mt: 3,
                p: 2,
                backgroundColor: "rgba(138, 43, 226, 0.1)",
                borderLeft: "4px solid #8a2be2",
                borderRadius: "4px",
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                💡 Fun Fact: {currentFunFact}
              </Typography>
              <Button
                size="small"
                onClick={() => setShowFunFact(false)}
                sx={{ mt: 1, color: "#8a2be2" }}
              >
                Fechar
              </Button>
            </Box>
          )}

          {selectedOption !== null && (
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                sx={{
                  backgroundColor: "#8a2be2",
                  "&:hover": { backgroundColor: "#7b1fa2" },
                }}
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Próxima"
                  : "Ver Resultado"}
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quiz;
