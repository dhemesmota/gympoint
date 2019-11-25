import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: stretch;

  flex-direction: row;
  justify-content: space-between;

  background: #fff;
  border: 1px solid #ddd;
  padding: 15px 20px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #666;
`;
