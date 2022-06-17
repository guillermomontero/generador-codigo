import { LitElement, html } from 'lit';
import { globalStyles } from '../../assets/styles/global-styles';
import { formStyles } from '../../assets/styles/form-styles';
import { buttonsStyles } from '../../assets/styles/buttons-styles';
import '../form/form-file';

export class HomeComponent extends LitElement {
  static styles = [
    globalStyles,
    formStyles,
    buttonsStyles,
  ];

  static properties = {
    formData: { type: Array },
  }

  constructor() {
    super();
    this.formData = [
      { name: null, type: 16, nameSQL: null, typeSQL: 16, required: false },
      { name: null, type: 16, nameSQL: null, typeSQL: 16, required: false },
      { name: null, type: 16, nameSQL: null, typeSQL: 16, required: false },
      { name: null, type: 16, nameSQL: null, typeSQL: 16, required: false },
      { name: null, type: 16, nameSQL: null, typeSQL: 16, required: false },
    ];
  }

  render() {
    return html`
      <form id="formData" class="form">
        <form-file numberFile="0" @data-form="${this._getDataForm}" @delete-form-file="${this._deleteFormFile}"></form-file>
        <form-file numberFile="1" @data-form="${this._getDataForm}" @delete-form-file="${this._deleteFormFile}"></form-file>
        <form-file numberFile="2" @data-form="${this._getDataForm}" @delete-form-file="${this._deleteFormFile}"></form-file>
        <form-file numberFile="3" @data-form="${this._getDataForm}" @delete-form-file="${this._deleteFormFile}"></form-file>
        <form-file numberFile="4" @data-form="${this._getDataForm}" @delete-form-file="${this._deleteFormFile}"></form-file>
      </form>
      <div class="divider"></div>
      <div class="buttons">
        <button class="buttons__button buttons__button--normal" @click="${this.addProperty}">Add property</button>
        <button class="buttons__button buttons__button--process" @click="${this.processToAPI}">Process</button>
      </div>
      <div class="divider"></div>
    `;
  }

  disallowAddProperty() {
    return this.formData.find(doc => !doc.name || !doc.type);
  }

  /**
   * Add a property to make an API
   */
  addProperty() {
    // If form has elements without name or type we don´t allow add a property
    if (this.formData.find(doc => !doc.name || !doc.type)) return;

    const form = this.shadowRoot.querySelector('form');
    const newFile = document.createElement('form-file');

    newFile.setAttribute('numberFile', form.children.length);
    this.formData.push({ name: null, type: 16, nameSQL: null, typeSQL: 16, required: false });

    form.appendChild(newFile);
  }

  processToAPI() {
    if (!this.formData[0].name || !this.formData[0].type) return;

    const dataToFetch = this.formData.filter(doc => doc.name && doc.type);
    console.log(dataToFetch);
  }

  _getDataForm(event) {
    this.formData[event.detail.idx] = event.detail.data;
  }

  _deleteFormFile(event) {
    const form = this.shadowRoot.querySelector('form');
    // form.children.slice(event.detail, 0);
  }
}

customElements.define('home-component', HomeComponent);
