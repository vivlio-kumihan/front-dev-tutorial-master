"use strict";

class InviewBTN {
  constructor() {
    this.btns = document.querySelectorAll(".inview-btn");
    this.images = document.querySelectorAll(".cover-slide.hover-darken");
    this._init();
  }

  _init() {
    this.btns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.images.forEach(image => {
          image.classList.toggle("inview");
        })
      });
    })
  }
}