import { LitElement, html } from 'lit';
import { formStyles } from '../../assets/styles/form-styles.js';
export class FormSelect extends LitElement {
  static styles = [
    formStyles,
  ];

  static properties = {
    selectId: { type: String, reflect: true },
    selectPlaceholder: { type: String, reflect: true },
    selectRequired: { type: Boolean, reflect: true }
  };

  render() {
    return html`
      <div class="form-contain">
        <select id="${this.selectId}" class="form__select">
          <option value="1">Byte</option>
          <option value="2">SByte</option>
          <option value="3">Short</option>
          <option value="4">UShort</option>
          <option value="5">Integer</option>
          <option value="6">UInteger</option>
          <option value="7">Long</option>
          <option value="8">ULong</option>
          <option value="9">Single</option>
          <option value="10">Double</option>
          <option value="11">Decimal</option>
          <option value="12">Boolean</option>
          <option value="13">Char</option>
          <option value="14">Date</option>
          <option value="15">Object</option>
          <option value="16" selected>String</option>
        </select>
        <label class="form__label" for="${this.selectId}">${this.selectPlaceholder}${this.selectRequired ? ' *' : ''}</label>
      </div>
    `;
  }
}
customElements.define('form-select', FormSelect);
