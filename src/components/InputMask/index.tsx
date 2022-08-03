import React,{useState} from 'react';
import {TextInputProps} from 'react-native';

import {maskCpf} from '../../utils/masks';

import { 
  Container,
  IconContainer,
  InputText,
  Icon
} from './styles';

interface Props extends TextInputProps{
  iconName:"mail" | "lock" | "edit";
  mask: 'cep' |'phone' | 'cpf';
  inputMaskChange: (valor:string) => void;
}

export function InputMask({iconName, mask,inputMaskChange, ...rest}:Props){
  const [isFocused, setIsFocused] = useState(false);
  

 
  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
    
  }

  function handleChange(valor:string){
    if(mask === 'cpf'){
      let value = maskCpf(valor);
      inputMaskChange(value);
    }else if (mask === 'cep'){
      //criar mascara de cep
    }else if (mask === 'phone'){
      //criar mascara telefones
    }
}
  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Icon 
          name={iconName}
          size={24}
          isFocused={isFocused}
        />
      </IconContainer>
     
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(cpf)=>handleChange(cpf)}
        {...rest}
      />   
    </Container>
  );
}
