import { init } from './controller/init.js';
import { render } from './render/render.js';

export const items = () => {
  const items = [];
  for (let i = 1; i <= 33; i++) {
    items.push({
      id: i,
      data: `dummy data ${i}`,
    });
  }
  return items;
};

export default function pagination(item, number) {
  render(item, number);
  init();
}

window.onload = () => {
  pagination(items, 10);
};
