import { log, done, warn, info } from './Log';

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
  
  document.head.appendChild(
    style.appendChild(
      document.createTextNode(css)
    )
  );
  
}

// give it a selector, some styles and functions