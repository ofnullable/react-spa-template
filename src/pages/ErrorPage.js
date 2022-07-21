import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { Media } from '../lib/style';
import { default as TakenSVG } from '../assets/undraw_Taken.svg';

const errorPageWrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--text-error);
  }

  img {
    margin: 1rem auto;
    max-width: 60%;
  }

  a {
    display: block;
    margin: 1rem auto;
    color: var(--link-primary);
  }

  ${Media.medium} {
    img {
      margin: 2rem auto;
      max-width: 70%;
    }
  }

  ${Media.small} {
    h1 {
      font-size: 2.5rem;
    }

    img {
      margin: 2rem auto;
      max-width: 80%;
    }
  }
`;

const ErrorPage = () => {
  return (
    <div css={[errorPageWrapper]}>
      <h1>Page Not Found.</h1>
      <img src={TakenSVG} alt="" />
      <Link to="/">go Home</Link>
    </div>
  );
};

export default ErrorPage;
