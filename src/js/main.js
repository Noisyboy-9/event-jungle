'use strict';
import Slider from './lib/Slider';
import Accordion from './lib/Accordion';

new Slider(
  '.slider__slide',
  '#slider__arrow--forward',
  '#slider__arrow--backward'
);

new Accordion(
  '.accordion__title-box',
  '.accordion__content',
  '.accordion__icon'
);

new Slider(
  '.slider2__slide',
  '#slider2__arrow--forward',
  '#slider2__arrow--backward'
);
