import React from 'react';

import styled from 'styled-components/native';

interface Props{
  description: string;
}

export function ErrorInput({description}:Props) {
  
  return (
    <Container>
      <ErrorText>{description}</ErrorText>
    </Container>
  );
}
export const Container = styled.View`
  margin-top:10;
`;
export const ErrorText = styled.Text`
  color:${({theme})=>theme.colors.main}
`;