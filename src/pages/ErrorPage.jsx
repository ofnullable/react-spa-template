import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const ErrorPageStyle = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h1 {
    color: red;
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const ErrorPage = () => {
    return (
        <div css={[ErrorPageStyle]}>
            <h1>Page Not Found.</h1>
        </div>
    );
};

export default ErrorPage;