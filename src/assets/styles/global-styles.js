import { css } from 'lit';

export const globalStyles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
  }

  .divider {
    height: 1px;
    border-top: 1px dotted rgba(0, 0, 0, 0.34);
    margin: 1em 0;
  }
`;
