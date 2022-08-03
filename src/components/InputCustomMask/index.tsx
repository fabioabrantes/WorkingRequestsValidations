import React,{useState} from 'react';
import {TextInputMaskProps} from 'react-native-masked-text';
import { TouchableOpacity } from 'react-native';

import { 
  Container,
  IconContainer,
  InputText,
  Icon
} from './styles';

export interface Props extends TextInputMaskProps{
  iconName:"mail" | "lock" | "edit";
  value?:string;
}

export function InputCustomMask({iconName,value, ...rest}:Props){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

 
  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Icon 
          name={iconName}
          size={24}
          isFocused={isFocused}
          isFilled={isFilled}
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
}
