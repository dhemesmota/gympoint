import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 20px;
  flex: 1;
  height: 100%;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 14px;
  color: #444;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TitleDay = styled.Text`
  font-size: 14px;
  color: #444;
  font-weight: normal;
`;

export const Waiting = styled.Text`
  color: #ee4e62;
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text`
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
  line-height: 26px;
`;
