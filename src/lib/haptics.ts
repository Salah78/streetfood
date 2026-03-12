"use client";

// Utilitaire pour gérer les retours haptiques (Vibrations sur mobile)
// Fonctionne uniquement sur les appareils mobiles Android et certains iOS avec WebApp

export type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'error';

export const triggerHaptic = (type: HapticType = 'light') => {
  if (typeof window === "undefined" || !window.navigator || !window.navigator.vibrate) {
    return;
  }

  try {
    switch (type) {
      case 'light':
        // Petit clic (ex: navigation)
        window.navigator.vibrate(10);
        break;
      case 'medium':
        // Clic standard (ex: ouvrir panier)
        window.navigator.vibrate(30);
        break;
      case 'heavy':
        // Grosse action (ex: ajouter un article lourd)
        window.navigator.vibrate(50);
        break;
      case 'success':
        // Double vibration rapide (ex: commande validée)
        window.navigator.vibrate([15, 50, 15]);
        break;
      case 'error':
        // Vibration longue ou pattern d'erreur
        window.navigator.vibrate([50, 50, 50]);
        break;
      default:
        window.navigator.vibrate(10);
    }
  } catch (error) {
    // Silently ignore if browser blocks vibration
  }
};
