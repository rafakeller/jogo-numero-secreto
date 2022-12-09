"use strict";

import { onSpeak } from "./onSpeak.js";



export const reconhecimentoDeVoz = () => {
  window.SpeechRecognition =
    window.SpeechRecongnition || webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "pt-Br";
  recognition.start();

  recognition.addEventListener("result", (event) => {
    onSpeak(event);
  });

  recognition.addEventListener("end", () => recognition.start());
};
