import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-left: 10px;
  color: ${props => (props.answer ? '#42cb59' : '#999')};
`;

export const DateText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin-left: 10px;
`;

export const Content = styled.Text.attrs({
  numberOfLines: 4,
})`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  line-height: 26px;
`;
