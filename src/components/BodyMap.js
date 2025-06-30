import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockIcon from "@mui/icons-material/Lock";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Confetti from "react-confetti";

const BodyMap = ({
  bodyParts,
  unlockedParts,
  score,
  totalQuestions,
  quizCompleted,
  showFunFact,
  currentFunFact,
  setShowFunFact,
}) => {
  const [selectedPart, setSelectedPart] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);

  const couplePhotos = [
    {
      id: 1,
      src: "/fotos/olhos.jpeg",
      caption: "Uma das primeiras fotos que tirei sua",
    },
    { id: 2, src: "/fotos/foto2.webp", caption: "" },
    { id: 3, src: "/fotos/foto3.jpg", caption: "" },
    { id: 4, src: "/fotos/foto4.webp", caption: "" },
    { id: 5, src: "/fotos/foto5.webp", caption: "" },
    {
      id: 6,
      src: "/fotos/foto6.jpg",
      caption: "Obrigada por sempre tá comigo <3",
    },
    { id: 7, src: "/fotos/foto7.jpg", caption: "" },
    { id: 8, src: "/fotos/foto8.jpg", caption: "" },
    { id: 9, src: "/fotos/foto9.jpg", caption: "" },
    { id: 10, src: "/fotos/foto10.jpg", caption: "" },
    { id: 11, src: "/fotos/foto11.jpg", caption: "" },
    { id: 12, src: "/fotos/foto12.webp", caption: "" },
    { id: 13, src: "/fotos/foto13.jpg", caption: "" },
    { id: 14, src: "/fotos/foto14.jpg", caption: "" },
    { id: 15, src: "/fotos/foto15.jpg", caption: "" },
    { id: 16, src: "/fotos/foto16.jpg", caption: "" },
    { id: 17, src: "/fotos/foto17.jpg", caption: "" },
    { id: 18, src: "/fotos/foto18.jpg", caption: "" },
    { id: 19, src: "/fotos/foto19.jpg", caption: "" },
    { id: 20, src: "/fotos/foto20.jpg", caption: "" },
    { id: 21, src: "/fotos/foto21.jpg", caption: "" },
    { id: 22, src: "/fotos/foto22.jpg", caption: "" },
    { id: 23, src: "/fotos/foto23.jpg", caption: "" },
  ];

  const handlePartClick = (partKey) => {
    if (unlockedParts.includes(partKey)) {
      setSelectedPart(bodyParts[partKey]);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" component="h2" gutterBottom>
        {score === totalQuestions ? (
          <>Parabéns! 🎉 Você acertou tudo!</>
        ) : (
          <>
            Você acertou {score} de {totalQuestions}!
          </>
        )}
      </Typography>

      {quizCompleted && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <Typography variant="body1" sx={{ mb: 4 }}>
        {score === totalQuestions
          ? "Você conhece nosso amor perfeitamente!"
          : "Clique nas partes desbloqueadas para ver nossas memórias especiais!"}
      </Typography>

      {/* Mapa do Corpo */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "400px", md: "500px" },
          my: 4,
          backgroundImage: "url(/body.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {Object.entries(bodyParts).map(([key, part]) => (
          <IconButton
            key={key}
            sx={{
              position: "absolute",
              ...part.position,
              color: unlockedParts.includes(key)
                ? "primary.main"
                : "text.disabled",
              fontSize: "3rem",
              "& .MuiSvgIcon-root": {
                fontSize: "inherit",
              },
              filter: unlockedParts.includes(key)
                ? "drop-shadow(0 0 10px rgba(138, 43, 226, 0.7))"
                : "none",
            }}
            onClick={() => handlePartClick(key)}
          >
            {unlockedParts.includes(key) ? (
              <FavoriteIcon fontSize="inherit" />
            ) : (
              <LockIcon fontSize="inherit" />
            )}
          </IconButton>
        ))}
      </Box>

      {/* Mensagem da parte selecionada */}
      {selectedPart && (
        <Card sx={{ maxWidth: "500px", mx: "auto", mt: 4 }}>
          <CardContent sx={{ textAlign: "center", py: 4 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 60,
                height: 60,
                fontSize: "2rem",
                mb: 2,
                mx: "auto",
              }}
            >
              {selectedPart.icon}
            </Avatar>
            <Typography variant="h5" component="h3" gutterBottom>
              {selectedPart.name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              "{selectedPart.message}"
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Botão para mostrar o carrossel */}
      {!showCarousel && (
        <Button
          variant="contained"
          sx={{
            mt: 4,
            background: "linear-gradient(45deg, #8a2be2, #b388ff)",
            "&:hover": {
              background: "linear-gradient(45deg, #7b1fa2, #9c27b0)",
            },
          }}
          onClick={() => setShowCarousel(true)}
        >
          Ver Nossas Fotos
        </Button>
      )}

      {showFunFact && (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "background.paper",
            color: "primary.main",
            p: 2,
            borderRadius: "12px",
            boxShadow: 24,
            maxWidth: "90%",
            width: "400px",
            textAlign: "center",
            zIndex: 9999,
            border: "2px solid",
            borderColor: "primary.main",
            animation: "fadeIn 0.3s ease-out",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            💡 Você sabia?
          </Typography>
          <Typography>{currentFunFact}</Typography>

          <IconButton
            onClick={() => setShowFunFact(false)}
            sx={{
              position: "absolute",
              top: 4,
              right: 4,
              color: "primary.main",
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      {/* Carrossel de Fotos */}
      {showCarousel && (
        <Box sx={{ mt: 6, maxWidth: "800px", mx: "auto", mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Fotos da Nossa Trajetoria
          </Typography>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            style={{
              borderRadius: "16px",
              border: "2px solid #8a2be2",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(138, 43, 226, 0.3)",
              height: "700px",
            }}
          >
            {couplePhotos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <Box
                  sx={{
                    position: "relative",
                    height: "700px",
                    background: `url(${photo.src}) center/cover no-repeat`,
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "rgba(0,0,0,0.7)",
                      p: 2,
                      color: "white",
                      fontFamily: '"Montserrat", sans-serif',
                    }}
                  >
                    {photo.caption}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      )}

      {/* Botão de recomeçar */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          size="large"
          startIcon={<CelebrationIcon />}
          href="/"
          sx={{ px: 4 }}
        >
          Recomeçar
        </Button>

        {quizCompleted && typeof window !== "undefined" && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
          />
        )}
      </Box>
      {showFunFact && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: "rgba(138, 43, 226, 0.1)",
            borderLeft: "4px solid #8a2be2",
            borderRadius: "4px",
            maxWidth: "600px",
            mx: "auto",
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
    </Box>
  );
};

export default BodyMap;
