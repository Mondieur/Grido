// TODO: Define a new custom element
class HelloWorld extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = "Hello, world!";
  }
}

customElements.define("my-element", HelloWorld);