import styled from 'styled-components';
import { darken } from 'polished';

const ContainerHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 40px;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: #444;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  button {
    height: 36px;
    border: 0;
    border-radius: 4px;
    padding: 0 16px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    background: #ddd;
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: ${darken(0.05, '#ddd')};
    }

    &.gymcolor {
      background: #ee4d64;
    }

    &.gymcolor:hover {
      background: ${darken(0.05, '#EE4D64')};
    }

    svg {
      margin-right: 10px;
    }

    & + button {
      margin-left: 16px;
    }
  }

  span {
    position: relative;
    margin-left: 16px;

    input {
      border-radius: 4px;
      border: 1px solid #ddd;
      padding: 10px 16px 10px 40px;
      height: 36px;
      color: #444;

      &::placeholder {
        font-size: 1.4rem;
        color: #999;
      }
    }

    label {
      position: absolute;
      top: 10px;
      left: 10px;
      cursor: pointer;
    }
  }
`;

export default ContainerHeader;
