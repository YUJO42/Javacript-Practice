import { init } from './controller/init.js';
import { render } from './render/render.js';

export default function pagination() {
  render();
  init();
}

window.onload = () => {
  pagination();
};
