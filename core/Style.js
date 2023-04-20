import { log, done, warn, info } from './Log';

// TODO: add style to element
export function addStyles() {
  
  const style = document.createElement('style');

  if (!style)
    warn('element not found!');

  log(style);

  let el = 'my-element';

  let css = `
    ${el} {
      color: red;
    }
  `;

  // TODO: CSSOM API 
  document.head.appendChild(style.appendChild(document.createTextNode(css))); 
}