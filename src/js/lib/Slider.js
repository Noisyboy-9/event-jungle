'use strict';

export default class Slider {
  constructor(slides, nextBtn, prevBtn) {
    this._slides = document.querySelectorAll(slides);

    this._nextBtn = document.querySelector(nextBtn);
    this._prevBtn = document.querySelector(prevBtn);

    this._counter = 0;
    this.addButtonListener();
  }

  addButtonListener() {
    this._nextBtn.addEventListener('click', event => {
      event.preventDefault();
      this.moveOneLevelForward();
    });

    this._prevBtn.addEventListener('click', event => {
      event.preventDefault();
      this.moveOneLevelBackward();
    });
  }

  moveOneLevelForward() {
    if (this._counter === 3) {
      this._counter = 0;
    } else {
      this._counter++;
    }

    this._slides.forEach(slide => {
      slide.style.transform = 'translate(' + this._counter * -678 + 'px)';
    });
  }

  moveOneLevelBackward() {
    if (this._counter === 0) {
      this._counter = 3;
    } else {
      this._counter--;
    }

    this._slides.forEach(slide => {
      slide.style.transform = 'translate(' + this._counter * -678 + 'px)';
    });
  }
}
