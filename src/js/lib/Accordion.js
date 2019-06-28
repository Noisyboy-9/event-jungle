'use strict';

export default class Accordion {
  constructor(title, content, icon) {
    this._titles = document.querySelectorAll(title);
    this._contents = document.querySelectorAll(content);
    this._icons = document.querySelectorAll(icon);

    this.titleListener();
  }

  titleListener() {
    this._titles.forEach(title => {
      title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('accordion__content--active');

        title
          .querySelector('.accordion__icon')
          .classList.toggle('accordion__icon--active');
      });
    });
  }
}
