import React,{useState} from 'react';

import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
} from 'react-native';

import {ButtonCustom} from '../../../components/ButtonCustom';
import {InputCustom} from '../../../components/InputCustom';

import {validateEmail,validatePassword} from '../../../utils/validations';

import api  from '../../../api';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
} from './styles';

import {useTheme} from 'styled-components';

interface IResponse{
  status: string;
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorValidator, setErrorValidator] = useState('');

  const theme = useTheme();

  function validaCampos(){
    let message = '';
    if(!validateEmail(email) || !validatePassword(password) ){
      message = "Preencha seu email ou Password corretamente";
    }
    setErrorValidator(message);    
  }

  async function handleSignIn(){
    validaCampos();
    if(errorValidator) {
      return Alert.alert(errorValidator);
    }
    // aqui fazer o login com a api
    const data ={
      email,
      password
    }
    const response = await api.post('loginsimples',data);
    const {status} = response.data as IResponse;
    Alert.alert(status);
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <Header>
              <Title>
                IFPB -
                Campus Cajazeiras
              </Title>
              <SubTitle>
                Faça seu login para começar{'\n'} 
                uma experiência incrível.
              </SubTitle>
            </Header>

            <Form>
              <InputCustom 
                iconName="mail"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}/* não fica corrigindo palavras */
                autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                onChangeText={setEmail}
                value={email}
              />

              <InputCustom 
                iconName="lock"
                placeholder="Senha"
                onChangeText={setPassword}
                value={password}
              />
            </Form>

            <Footer>
              <ButtonCustom
                title="Login"
                onPress={handleSignIn}
                loading={false}
              />

              <ButtonCustom
                title="Criar conta gratuita"
                color={theme.colors.secondary}
                onPress={()=>{}}
                disabled={true}
                loading={false}
              />
            </Footer>
          </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}