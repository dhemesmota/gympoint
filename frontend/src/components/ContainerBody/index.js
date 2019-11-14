import styled from 'styled-components';

const ContainerBody = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  table {
    border-spacing: 0;
    font-size: 1.6rem;

    .center {
      text-align: center;
    }

    .right {
      text-align: right;
    }
  }

  table thead tr th {
    text-align: left;
    color: #444;
  }

  table tbody tr td {
    text-align: left;
    color: #666;
    padding: 16px 0;

    border-bottom: 1px solid #eee;

    span {
      display: flex;
      justify-content: flex-end;
      button,
      a {
        border: 0;
        background: transparent;

        & + button {
          margin-left: 23px;
        }

        &.edit {
          color: #4d85ee;
        }

        &.delete {
          color: #de3b3b;
        }
      }
    }
  }

  table tbody tr:last-child td {
    padding: 16px 0 0 0;
    border: none;
    max-width: 40px;
  }
`;

export default ContainerBody;
