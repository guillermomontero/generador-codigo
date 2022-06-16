import { LitElement, html } from 'lit';
import { formStyles } from '../../assets/styles/form-styles';

export class FormInput extends LitElement {
  static styles = [
    formStyles,
  ];

  static properties = {
    inputId: { type: String, reflect: true },
    inputName: { type: String, reflect: true },
    inputType: { type: String, reflect: true },
    inputPlaceholder: { type: String, reflect: true },
    inputRequired: { type: Boolean, reflect: true }
  };

  changeName(event) {
    const input = event.target;
    this.inputName = input.value;
    this.dispatchEvent(new CustomEvent('change-name', { detail: this.inputName }));
  }

  render() {
    return html`
      <div class="form-contain">
        <input id="${this.inputId}" class="form__input" type="${this.inputType}" placeholder=" " @input="${this.changeName}"/>
        <label class="form__label" for="${this.inputId}">${this.inputPlaceholder}${this.inputRequired ? ' *' : ''}</label>
      </div>
    `;
  }
}
customElements.define('form-input', FormInput);
