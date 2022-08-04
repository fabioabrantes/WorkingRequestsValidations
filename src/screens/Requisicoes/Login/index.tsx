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
  Footer
} from './styles';

import {useTheme} from 'styled-components';

interface IData{
  avatar:string;
  titulo:string;
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorValidator, setErrorValidator] = useState('');
  const [message, setMessage] = useState('');

  const theme = useTheme();

  function validaCampos(){
    let error = false;
    if(!validateEmail(email) || !validatePassword(password) ){
     let message = "Preencha seu email ou Password corretamente";
      setErrorValidator(message);
      error=true;    
    }
    return !error;
  }

  async function handleSignIn(){
    
    try {
      if(!validaCampos()) {
        return Alert.alert(errorValidator);
      }
      // aqui fazer o login com a api
      const response = await api.get('cinema');
      const data = response.data as IData[];
      let text = "";
       data.forEach((item,index) =>{
        text= text + index + ": " + item.titulo + "\n";
      });
      setMessage(text);
      return ;
    } catch (error) {
      console.log(error);
      return;
    }
  } 

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled >
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
                {
                  message.length > 0 && (
                    <Header>
                      <SubTitle> {message}</SubTitle>
                    </Header>
                  )
                }
              </Footer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}