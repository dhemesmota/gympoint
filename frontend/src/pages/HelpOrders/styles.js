import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerModal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  strong,
  label {
    font-size: 1.4rem;
    font-weight: bold;
    color: #444;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 26px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    textarea {
      margin-top: 8px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      height: 127px;
      padding: 13px 15px;
      font-size: 1.4rem;
      color: #444;

      &::placeholder {
        font-size: 1.4rem;
        color: #999;
      }
    }
  }

  button {
    height: 45px;
    width: 100%;
    border: 0;
    border-radius: 4px;
    padding: 0 16px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s;
    background: #ee4d64;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${darken(0.05, '#ee4d64')};
    }
  }
`;
