import React from 'react';
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import LogoIcon from '../assets/star.svg';
import SunIcon from '../assets/sun.svg';
import MoonIcon from '../assets/moon.svg';
import media from '../styles/media';
import { useThemeContext } from '../contexts/ThemeContext';

const headerStyle = css`
  height: 60px;
  ${media.medium} {
    height: 50px;
  }

  & > nav {
    height: 100%;
    display: flex;
    padding: 0 12px;
    margin: 0 auto;
    max-width: 1440px;
    align-items: center;
    justify-content: space-between;

    .logo a {
      height: 100%;
      display: flex;
      align-items: center;
      color: #ffdd00;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
    }
    svg.logo {
      width: 2rem;
      height: 2rem;
      fill: #ffdd00;
      margin-right: 0.5rem;
    }
    svg.theme {
      cursor: pointer;
      display: flex;
    }
  }
`;

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header css={[headerStyle]}>
      <nav>
        <div className="logo">
          <Link to="/">
            <LogoIcon className="logo" />
            LOGO
          </Link>
        </div>
        <div>
          {theme === 'light' ? (
            <SunIcon className="theme" onClick={toggleTheme} />
          ) : (
            <MoonIcon className="theme" onClick={toggleTheme} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
