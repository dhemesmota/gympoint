import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ListHelp = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 10 },
})`
  margin-top: 10px;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
