import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { useThemeContext } from '../contexts/ThemeContext';

import { ReactComponent as LogoIcon } from '../assets/zap.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 12px;
  width: 100%;
  max-width: 1280px;

  ${Media.medium} {
    height: 50px;
  }

  a {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-right: 40px;

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 0.4rem;
    }
  }

  svg {
    cursor: pointer;
    color: var(--primary);
    fill: var(--primary);
  }

  svg.theme {
    display: flex;
    user-select: none;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const { isLight, toggleTheme } = useThemeContext();

  return (
    <header css={[headerStyle]}>
      <Link to="/" replace={pathname === '/'}>
        <LogoIcon /> brand
      </Link>

      <div>
        {isLight ? (
          <SunIcon className="theme" onClick={toggleTheme} />
        ) : (
          <MoonIcon className="theme" onClick={toggleTheme} />
        )}
      </div>
    </header>
  );
};

export default Header;
