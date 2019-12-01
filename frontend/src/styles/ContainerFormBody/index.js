import styled from 'styled-components';

const ContainerBody = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  span {
    margin-top: 4px;
    color: #ee4d64;
  }

  label {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 8px;
    color: #444;
    cursor: pointer;
  }

  input {
    height: 45px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 13px 15px;
  }

  .select input {
    height: 31px;
  }

  .row {
    display: flex;
    flex-direction: row;

    .input-group {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-right: 15px;
    }
    & > :last-child {
      margin-right: 0;
    }
  }
`;

export default ContainerBody;
