import { LitElement, html } from 'lit';
import { formStyles } from '../../assets/styles/form-styles';

export class FormCheckbox extends LitElement {
  static styles = [
    formStyles
  ];

  static properties = {
    inputValue: { type: Boolean },
  }

  constructor() {
    super();
    this.inputValue = false;
  }
  
  changeValue(e) {
    this.inputValue = e.path[0].checked;
  }

  render() {
    return html`
      <div class="checkbox">
        <input type="checkbox" name="checkbox" id="checkbox" @input="${this.changeValue}"></input>
        <label for="checkbox">Required</label>
      </div>
    `;
  }
}
customElements.define('form-checkbox', FormCheckbox);
