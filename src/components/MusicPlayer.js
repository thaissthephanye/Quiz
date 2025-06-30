import React, { useState, useRef, useEffect } from "react";
import { IconButton, Slider, Box, Typography } from "@mui/material";
import { PlayArrow, Pause, VolumeUp, MusicNote } from "@mui/icons-material";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  // Carrega a música corretamente
  useEffect(() => {
    audioRef.current = new Audio(
      process.env.PUBLIC_URL + "/musica/Cinnamon-Girl.mp3"
    );
    audioRef.current.volume = volume;
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => {
        console.error("Erro ao reproduzir:", e);
        alert("Clique em qualquer lugar da página para ativar o áudio!");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        bgcolor: "rgba(138, 43, 226, 0.8)",
        borderRadius: "50px",
        p: 1,
        display: "flex",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <IconButton onClick={togglePlay} color="primary">
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>

      <VolumeUp sx={{ ml: 1, color: "white" }} />
      <Slider
        value={volume}
        onChange={(e, v) => {
          setVolume(v);
          audioRef.current.volume = v;
        }}
        min={0}
        max={1}
        step={0.1}
        sx={{ width: "100px", ml: 1, color: "white" }}
      />
    </Box>
  );
}
