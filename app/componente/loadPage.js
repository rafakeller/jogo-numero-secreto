"use strict";

export const loadPage = () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.id == "jogar-novamente") {
      window.location.reload();
    }
  });
};
