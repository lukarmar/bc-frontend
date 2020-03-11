import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  /* header da aplicação */
  header {
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f4f9;

    img {
      height: 36px;
      width: 215px;
    }
  }
`;

/* corpo da aplicação */
export const Content = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
/* apresentação da aplicação */
export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 0 100px 0;
  height: auto;
  background: #652581;

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    width: 60px;
    height: 60px;
    background: #652581;
    clip-path: polygon(51% 43%, 0 0, 100% 0);
  }
  /* dizeres  */
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffff;

    letter-spacing: 2px;
    text-align: center;
    max-width: 900px;

    h1 {
      font-size: 4em;
      margin: 10px 0 8px 0;
    }
    h2 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    h3 {
      font-size: 2em;
    }
  }
`;
/* container de benefícios */
export const Benefits = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f4f9;
  padding: 50px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;

    > h1 {
      color: #652581;
      letter-spacing: 2px;
      font-size: 3em;
    }
  }
`;

/* elaboração dos flex's de cada usuário */
export const ListTwoPesson = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    color: #652581;
    padding: 12px;

    div {
      display: flex;
      height: auto;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px 18px;
        background: #ffffff;
        height: 120px;
        text-align: center;
        margin-right: 6px;
        border-radius: 8px;
        margin-top: 15px;
        font-size: 16px;
        transition: ease 0.6s;

        &:hover {
          color: #ffffff;
          background: #652581;
        }
      }
    }
    /*responsividade*/
    @media (max-width: 878px) {
      div {
        display: flex;
        flex-direction: column;

        span {
          height: 120px;
          text-align: center;
        }
      }
    }
  }
`;
/* caixa-container do formulário */
export const BoxForm = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 30px 50px 30px;
  height: auto;
  background: #652581;

  section {
    width: 50%;
    text-align: center;
    font-size: 3em;
    color: #ffffff;
    margin-right: 35px;

    > div {
      background: #652581;
      margin-top: 25px;
      p {
        font-size: 0.5em;
        margin-bottom: 40px;
        transition: ease 0.5s;

        &:hover {
          font-size: 0.6em;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px;

    background: #ffffff;
    border-radius: 4px;

    h1 {
      color: #652581;
      margin-bottom: 10px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        color: #652581;
        margin: 10px 0 5px 0;
      }

      input,
      select {
        background: #ffffff;
        border: 1px solid #dddddd;
        height: 45px;
        padding: 13px 0 13px 15px;
        width: 300px;
        border-radius: 4px;
        font-size: 14px;
        color: #2e2e2e;
      }

      span {
        color: red;
      }

      button {
        width: 100%;
        height: 45px;
        padding: 13px 65px 13px 65px;
        background: #1aa06f;
        outline: none;
        border: 0;
        margin-top: 8px;
        border-radius: 4px;
        color: #ffffff;
        font-weight: bold;
        transition: ease 0.4s;

        :hover {
          background: ${darken(0.05, '#1aa06f')};
        }

        svg {
          width: 40%;
        }
      }
    }
  }
  /*responsividade*/
  @media (max-width: 812px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 360px;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 15px;

      > div {
        width: 100%;
        p {
          width: 100%;
        }
      }
    }
  }
`;
