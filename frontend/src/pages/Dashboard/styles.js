import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Card = styled(Link)`
  width: 100%;
  min-width: 240px;
  max-width: 242px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f8f6fc;
  box-shadow: 0 0 4px rgba(247, 246, 251, 0.8);
  color: #2c2c34;
  transition: all 0.2s ease;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-color: #ececec;
  }

  .left {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      border-radius: 50%;
      height: 90px;
      width: 90px;
      background: #ffefef;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 60px;
        width: 100%;
        fill: #de3b3b !important;
        stroke: #de3b3b !important;
      }
      img svg {
        fill: #de3b3b !important;
        stroke: #de3b3b !important;
      }
    }
  }

  .right {
    flex: 1;
    height: 100%;
    padding: 35px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h1 {
      font-size: 20px;
      font-weight: bold;
    }

    span {
      color: #898989;
      font-weight: 300;
      font-size: 13px;
    }

    small {
      color: #de3b3b;
      display: flex;
      align-items: center;
      margin-top: 10px;
      text-decoration: underline;

      svg {
        fill: #de3b3b;
      }
    }
  }

  & + & {
    margin-left: 10px;
  }
`;
