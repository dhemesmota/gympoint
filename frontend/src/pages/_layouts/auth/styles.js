import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #ee4d64;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  background: #fff;
  border-radius: 4px;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;

  img {
    height: 100px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      font-weight: bold;
      color: #444;
      margin-bottom: 8px;
      margin-top: 20px;
    }

    input {
      background: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 45px;
      padding: 13px 15px;

      &::placeholder {
        font-size: 16px;
        color: #999;
      }
    }

    span {
      margin-top: 4px;
      color: #ee4d64;
    }

    button {
      margin-top: 20px;
      padding-top: 4px;
      background: #ee4d64;
      border: 0;
      border-bottom: 4px solid #ee4d64;
      border-radius: 4px;
      height: 45px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      line-height: 19px;
      transition: all 0.2s;

      display: flex;
      justify-content: center;

      &:hover {
        background: ${darken(0.04, '#ee4d64')};
        border-bottom: 4px solid ${darken(0.1, '#ee4d64')};
      }
    }
  }
`;
