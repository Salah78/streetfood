"use client";

// Utilitaire pour jouer des sons UI
// On utilise des sons libres de droits (Pixabay)

let hoverAudio: HTMLAudioElement | null = null;
let sizzleAudio: HTMLAudioElement | null = null;

if (typeof window !== "undefined") {
  // Petit son électrique / zap pour le survol
  hoverAudio = new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_24e39fb688.mp3");
  hoverAudio.volume = 0.15;

  // Son de viande qui frit (sizzle) pour l'action principale "Commander"
  sizzleAudio = new Audio("https://cdn.pixabay.com/audio/2022/10/24/audio_341db45700.mp3");
  sizzleAudio.volume = 0.4;
}

export const playHoverSound = () => {
  if (hoverAudio) {
    hoverAudio.currentTime = 0; // Remet le son au début pour permettre des survols rapides
    hoverAudio.play().catch(() => {
      // Ignorer l'erreur si le navigateur bloque l'autoplay sans interaction utilisateur
    });
  }
};

export const playSizzleSound = () => {
  if (sizzleAudio) {
    sizzleAudio.currentTime = 0;
    sizzleAudio.play().catch(() => {});
  }
};
