import styled from 'styled-components';

const ContainerBody = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-top: 20px;
    color: #444;
  }

  input {
    height: 45px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 13px 15px;
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
