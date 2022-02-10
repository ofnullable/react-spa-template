import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { media } from '../styles/media';
import { useThemeContext } from '../contexts/ThemeContext';

import { ReactComponent as LogoIcon } from '../assets/zap.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const headerStyle = (colors, isLight) => css`
  height: 60px;

  ${media.medium} {
    height: 50px;
  }

  & > nav {
    height: 100%;
    display: flex;
    padding: 0 12px;
    margin: 0 auto;
    max-width: 1280px;
    align-items: center;
    justify-content: space-between;

    .logo a {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;

      svg {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
    }

    svg {
      cursor: pointer;
      color: ${isLight ? 'inherit' : colors.yellow[4]};
      fill: ${colors.yellow[6]};
    }

    svg.theme {
      display: flex;
      user-select: none;
    }
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { colors, isLight, toggleTheme } = useThemeContext();

  return (
    <header css={[headerStyle(colors, isLight)]}>
      <nav>
        <div className="logo">
          <Link to="/" replace={pathname === '/'}>
            <LogoIcon />
            brand
          </Link>
        </div>
        <div>
          {isLight ? (
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
