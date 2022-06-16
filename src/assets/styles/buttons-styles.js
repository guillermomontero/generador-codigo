import { css } from 'lit';

export const buttonsStyles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
  }

  button {
    -webkit-appearance: none;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background: none;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
  }

  .buttons__button {
    padding: 0.8em 2em;
    border: 1px solid rgba(0, 0, 0, 0.34);
    border-radius: 5px;
    text-align: center;
    transition: all ease 0.2s;
  }

  .buttons__button:not(:last-child) {
    margin-right: 1em;
  }

  .buttons__button--normal {
    color: #9cb200;
    background: none;
    border: 1px solid #9cb200;
  }

  .buttons__button--normal:hover {
    color: #ffffff;
    background: #9cb200;
    border: 1px solid rgba(0, 0, 0, 0.34);
  }

  .buttons__button--process {
    color: #ffffff;
    border: 1px solid #9cb200;
    background: #9cb200;
  }

  .buttons__button--process:hover {
    border: 1px solid rgba(0, 0, 0, 0.34);
  }
`;
