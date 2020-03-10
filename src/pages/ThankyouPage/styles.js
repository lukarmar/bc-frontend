import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #652581;
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;

  h1 {
    font-size: 4em;
    margin: 10px 0 8px 0;
    color: #ffff;
    letter-spacing: 2px;
    text-align: center;
  }

  h3 {
    font-size: 2em;
    margin: 10px 0 8px 0;
    color: #ffff;
    letter-spacing: 2px;
    text-align: center;
  }
`;

export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  animation: ${fadeIn} ease-in 2.5s;

  .image-2 {
    width: 50%;
    opacity: 1;
  }
`;
