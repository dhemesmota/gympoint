import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const TInput = styled(Input)`
  height: 300px;
  align-items: flex-start;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
