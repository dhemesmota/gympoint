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

      &.active {
        color: #444;
      }
    }

    a + a {
      margin-left: 20px;
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
