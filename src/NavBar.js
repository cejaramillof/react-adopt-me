import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const color = 'pink';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
      background-color: #333;
      background-color: ${color};
      background-color: ${colors.secondary};
      padding: 15px;
      padding: ${padding}px;
    `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 10s ${spin} linear infinite;
          &:hover {
            animation: 10s ${spin} linear infinite reverse;
          }
          & > button {
            /* immediatly child selector */
          }
        `}
        role="img" aria-label="logo">🐶</span>
    </header>
  )
}
export default NavBar;