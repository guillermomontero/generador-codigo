import { css } from 'lit';

export const formStyles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
  }

  input {
    -webkit-appearance: none;
    outline: none;
  }

  select {
    outline: none;
  }

  .form {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
  }

  .form-file {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
  }

  .form-file__icon {
    width: 30px;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }

  .form-file__icon img {
    width: 100%;
    cursor: pointer;
    opacity: 0.4;
    transition: all ease 0.2s;
  }

  .form-file__icon img:hover {
    opacity: 0.6;
  }

  .form-contain {
    position: relative;
    margin: 0 0 1em 0;
    width: 200px;
    margin-right: 0.5rem;
  }

  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    padding: 1.2rem 1rem 0.5rem 1rem;
    font-family: 'Poppins', sans-serif !important;
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.34);
    z-index: 1;
  }

  .form__select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    padding: 1.2rem 1rem 0.5rem 0.8rem;
    font-family: 'Poppins', sans-serif !important;
    color: #000000;
    border: 1px solid rgba(0, 0, 0, 0.34);
    z-index: 1;
  }

  .form__label {
    position: absolute;
    left: auto;
    top: 0.9rem;
    padding: 0 1rem 0.5rem 1rem;
    color: rgba(0, 0, 0, 0.34);
    cursor: text;
    transition: top 100ms ease-in, left 100ms ease-in, font-size 100ms ease-in;
    z-index: 2;
  }

  .form__input:focus,
  .form__select:focus {
    border: 1px solid #9cb200;
  }

  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label,
  .form__select:focus ~ .form__label,
  .form__select:not(:placeholder-shown).form__select:not(:focus) ~ .form__label {
    top: 0.4rem;
    font-size: 0.7rem;
  }

  .form__input:focus ~ .form__label,
  .form__select:focus ~ .form__label {
    color: #9cb200;
  }

  .checkbox {
    width: 100%;
  }

  .checkbox label {
    padding: .5em 1.5em .5em 2em;
    font-size: .8rem;
    line-height: .8rem;
    color: #000000;
    cursor: pointer;
    position: relative;
    transition: all ease .2s;
  }

  .checkbox label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.34);
    background: none;
    position: absolute;
    top: 4px;
    left: 0px;
    z-index: 1;
    transition: all ease .2s;
  }

  .checkbox input[type="checkbox"] {
    display: none;
  }

  .checkbox input[type="checkbox"]:checked + label:before {
    background: #9cb200;
  }

  form-file {
    width: auto;
    height: 4rem;
  }

  form-input, form-select, form-checkbox {
    height: 54px;
  }

  form-checkbox {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`;
