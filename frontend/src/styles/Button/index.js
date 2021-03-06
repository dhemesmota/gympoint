import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button.attrs({
  type: 'button',
})`
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
`;

export default Button;
