import { LitElement, html } from 'lit';
import { formStyles } from '../../assets/styles/form-styles';
import './form-input';
import './form-select';
import './form-checkbox';

export class FormFile extends LitElement {
  static styles = [
    formStyles
  ];

  static properties = {
    numberFile: { type: Number },
    formFileData: { type: Object },
  }

  constructor() {
    super();
    this.formFileData = {
      name: null,
      type: 16,
      nameSQL: null,
      typeSQL: 16,
      required: false,
    }
  }

  render() {
    return html`
      <div class="form-file">
        <!-- <div class="form-file__icon" @click="${this.deleteFormFile}">
          <img src="./src/assets/icons/trash.png"></img>
        </div> -->
        <form-input inputId="name1${this.numberFile}" inputType="text" inputPlaceholder="Name" inputRequired="true" @change-name="${this._changeInputName}"></form-input>
        <form-select selectId="type1${this.numberFile}" selectPlaceholder="Type" selectRequired="true"></form-select>
        <form-input inputId="name2${this.numberFile}" inputType="text" inputPlaceholder="Name (SQL)" @change-name="${this._changeInputNameSQL}"></form-input>
        <form-select selectId="type2${this.numberFile}" selectPlaceholder="Type (SQL)"></form-select>
        <form-checkbox></form-checkbox>
      </div>
    `;
  }

  _changeInputName(event) {
    this.formFileData.name = event.detail;
    this._emitEvent(this.formFileData);
  }

  _changeInputNameSQL(event) {
    this.formFileData.nameSQL = event.detail;
    this._emitEvent(this.formFileData);
  }

  _emitEvent(data) {
    const dataForm = new CustomEvent('data-form', { detail: { data, idx: this.numberFile } });
    this.dispatchEvent(dataForm);
  }

  // deleteFormFile() {
  //   this.dispatchEvent(new CustomEvent('delete-form-file', { detail: this.numberFile }));
  // }
}
customElements.define('form-file', FormFile);
