import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #999;
      font-size: 1.5rem;
      transition: all 0.2s;
      position: relative;

      &.active {
        color: #444;

        &::after {
          position: absolute;
          content: '';
          height: 2px;
          width: 100%;
          background: #d23b3b;
          bottom: -22px;
          left: 0;
          animation-name: linewidth;
          animation-duration: 0.3s;
          animation-timing-function: ease-in-out;
        }
      }
    }

    a + a {
      margin-left: 20px;
    }
  }

  @keyframes linewidth {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: 1.4rem;
    color: #666;
    font-weight: bold;
  }

  button {
    border: 0;
    background: transparent;
    color: #de3b3b;
    margin-top: 5px;
    font-size: 1.4rem;
  }
`;
