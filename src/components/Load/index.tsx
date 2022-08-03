import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import {THEME} from '../../global/styles/themes';

export const Load: React.FC = () => {
  

  return (
    <Container>
      <ActivityIndicator 
        color={THEME.colors.secondary}
        size="large"
      />
    </Container>
  );
}
export const Container = styled.View`
  flex:1;
  justify-content: center;
`;