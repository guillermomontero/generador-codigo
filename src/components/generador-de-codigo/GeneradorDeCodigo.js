import { LitElement, html, css } from 'lit';

export class GeneradorDeCodigo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--generador-de-codigo-background-color);
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'Generador de código - imaster.golf';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/GeneradorDeCodigo.js</code> and save to reload.</p>
      </main>
    `;
  }
}
