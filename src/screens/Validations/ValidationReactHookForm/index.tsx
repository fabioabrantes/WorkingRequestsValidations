import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Platform,
} from 'react-native';

import {useForm} from'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {ButtonCustom} from '../../../components/ButtonCustom';
import {InputFormMask} from '../../../components/InputFormMask';
import {InputForm} from '../../../components/InputForm';

import {schemaValidation} from '../../../utils/validationYup';

import { 
  Container,
  Header,
  SubTitle,
  Form,
  Footer,
} from './styles';



type FormData = {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
};

export function ValidationReactHookForm() {
  const {
    control, 
    handleSubmit,
    formState: { errors } 
  } = useForm({
    resolver:yupResolver(schemaValidation)
  });
   

  function salvar({email,cpf,nome}:FormData){
    Alert.alert(
      'cadastro realizado com sucesso',
      `${email} ${cpf} ${nome}`,
      [{text: 'ok'}],
    );
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView 
          behavior="position"
          enabled
        >
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
              <InputForm 
                  iconName="edit"
                  name="nome"
                  control={control}
                  placeholder="Digite seu nome"
                  autoCorrect={false}/* não fica corrigindo palavras */
                  autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  error={errors.nome}
                />
                
                <InputForm 
                  iconName="mail"
                  name="email"
                  control={control}
                  placeholder="Digite seu E-mail"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none" 
                  error={errors.email}
                />
                
                <InputForm 
                  iconName="lock"
                  name="senha"
                  control={control}
                  placeholder="Digite sua Senha"
                  error={errors.senha}
                />
              
              <InputFormMask
                iconName='edit'
                placeholder="Digite seu CPF"
                type='cpf'
                control={control}
                name="cpf"
                keyboardType="number-pad"
                error={errors.cpf}
              />
              </Form>

              <Footer>
                <ButtonCustom
                  title="Cadastrar"
                  onPress={handleSubmit(salvar)}
                  loading={false}
                />
              </Footer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
  );
}