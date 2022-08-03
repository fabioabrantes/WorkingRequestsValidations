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
import {InputMask} from '../../../components/InputMask';
import {ErrorInput} from '../../../components/ErrorInput';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
} from './styles';


import {
  validateEmail,
  validaCpf,
  validatePassword, 
  validateName
} from '../../../utils/validations';


export function ValidationManual() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpf, setErrorCpf] = useState('');

  function handleName(text:string){
    setName(text);
    setErrorName('');
  }
  function handleEmail(text:string){
    setEmail(text);
    setErrorEmail('');
  }
  function handlePassword(text:string){
    setPassword(text);
    setErrorPassword('');
  }
  function handleCpf(text:string){
    setCpf(text);
    setErrorCpf('');
  }

  function validaCampos(){
    let error = false;
    if(!validateEmail(email)){
      setErrorEmail("Preencha seu email corretamente")
      error=true;
    }
    if(!validaCpf(cpf)){
      setErrorCpf("Preencha seu cpf corretamente");
      error=true;
    }
    if(!validatePassword(password)){
      setErrorPassword("Preencha seu password corretamente");
      error=true;
    }
    if(!validateName(name)){
      setErrorName("O nome tem que ter no mínimo 3 caracteres");
      error=true;
    }
    return !error;
  }

  function salvar(){
    if(validaCampos()){
      let data ={
        email,
        cpf,
        password,
        name
      }

      Alert.alert(
        'cadastro realizado com sucesso', 
        `${data.email}${data.name} ${data.cpf}`,
        [{text:'ok'}]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        enabled
      >
          <Container>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />

            <Header>
              <SubTitle>
                Faça seu Cadastro no sistema do IFPB.
              </SubTitle>
            </Header>

            <Form>
            <InputCustom 
                iconName="edit"
                placeholder="Digite seu nome"
                autoCorrect={false}/* não fica corrigindo palavras */
                autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                onChangeText={handleName}
                value={name}
              />
              {
                errorName.length > 0 && <ErrorInput description={errorName}/>
              }

              <InputCustom 
                iconName="mail"
                placeholder="Digite seu E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none" 
                onChangeText={handleEmail}
                value={email}
              />
              {
                errorEmail.length > 0 && <ErrorInput description={errorEmail}/>
              }

              <InputCustom 
                iconName="lock"
                placeholder="Digite sua Senha"
                onChangeText={handlePassword}
                value={password}
              />
              {
                errorPassword.length > 0 && <ErrorInput description={errorPassword}/>
              }

              <InputMask
                mask='cpf' 
                iconName="edit"
                placeholder="Digite seu CPF"
                inputMaskChange={handleCpf}
                value={cpf}
              />
              {
                errorCpf.length > 0 && <ErrorInput description={errorCpf}/>
              }
            </Form>

            <Footer>
              <ButtonCustom
                title="Cadastrar"
                onPress={salvar}
                loading={false}
              />
            </Footer>
          </Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
  );
}