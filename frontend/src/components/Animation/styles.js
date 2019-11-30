import styled from 'styled-components';

export const ContainerCheckmark = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLottie = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LottieSubTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;
