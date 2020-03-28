import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import GithubIcon from '../assets/github.svg';

const footerStyle = css`
  padding: 40px 16px;
  & > nav {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Footer = () => {
  return (
    <footer css={[footerStyle]}>
      <nav>
        <div>{new Date().getFullYear()} &copy; your copyright</div>
        <div>
          <a href="https://github.com/ofnullable/react-spa-template" target="_blank">
            <GithubIcon className="github" />
          </a>
        </div>
        <div>footer menus</div>
      </nav>
    </footer>
  );
};

export default Footer;
