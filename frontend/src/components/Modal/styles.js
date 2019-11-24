import styled, { keyframes } from 'styled-components';
import { fadeIn, zoomIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: 0.2s ${fadeInAnimation};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: ${props => (props.size === 'small' ? 300 : 600)}px;
  animation: 0.3s ${zoomInAnimation};

  p {
    font-size: 15px;
    margin-bottom: 10px;
    text-align: center;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 19px;
  color: #444;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
