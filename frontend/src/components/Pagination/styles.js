import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerList = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  a,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const LinkList = styled.div`
  background: #fff;
  color: #7d7d7d;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${darken(0.09, '#fff')};
  }
`;

export const DisabledLink = styled.div`
  background: #ee4d64;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    background: ${darken(0.05, '#ee4d64')};
  }
`;
