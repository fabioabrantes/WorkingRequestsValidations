/* Essa página exemplifica o uso das seguintes libs:
  - react native elements
      https://reactnativeelements.com/docs/
  - react native masked text
    https://github.com/benhurott/react-native-masked-text
*/
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {TextInputMask,TextInputMasked} from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';


import {validateEmail} from '../../../utils/validations';

export function ValidationLibExterna(){
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorSenha, setErrorSenha] = useState('');

  let cpfField:TextInputMasked = null;

  const validaCampos = () => {
    let error = false;
    setErrorEmail('');
    setErrorCpf('');
    setErrorSenha('');
    setErrorNome('');
    if (!validateEmail(email)) {
      setErrorEmail('Preencha seu e-mail corretamente');
      error = true;
    }
   if (senha == null || senha.length < 6) {
      setErrorSenha('Error: Senha menor que 6 caracteres');
      error = true;
    }
    if (nome == null || nome.length < 3) {
      setErrorNome('Error: Nome menor que 3 caracteres');
      error = true;
    }if (!cpfField?.isValid()){
    
      setErrorCpf("Error:cpf invalido. preenche corretamente");
      error = true;
    }
    return !error;
  };

  const salvar = () => {
    if (validaCampos()) {
      let data = {
        email,
        cpf,
        nome,
        senha,
      };
      Alert.alert(
        'cadastro realizado com sucesso',
        `${data.email} ${data.cpf} ${data.nome}`,
        [{text: 'ok'}],
      );
    } else {
      Alert.alert(
        'Error: Não foi possível realizar o cadastro. ',
        'Preencha corretamente os campus',
      );
    }
  };
  return (
    <View style={styles.Container}>
      <Text h2>Cadastre-se </Text>
      
      <Input
        autoCompleteType={Input}
        autoComplete='email'
        placeholder="E-mail"
        onChangeText={value=>{
          setEmail(value);
          setErrorEmail('');
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}
      />
      <Input
        autoCompleteType={Input}
        placeholder="nome"
        onChangeText={value=>{
          setNome(value);
          setErrorNome('');
        }}
        errorMessage={errorNome}
      />
      <Input
        autoCompleteType={Input}
        placeholder="senha"
        value={senha}
        onChangeText={value=>{
          setSenha(value);
          setErrorSenha('');
        }}
        secureTextEntry={true}
        errorMessage={errorSenha}
      />
      <View style={styles.containerMask}>
          <TextInputMask 
            placeholder="cpf"
            type={'cpf'}
            value={cpf}
            onChangeText={value=>{
              setCpf(value);
              setErrorCpf('');
            }}
            keyboardType="number-pad"
            style={styles.maskedInput}
            returnKeyType="done"
            ref ={ref=>(cpfField = ref as unknown as TextInputMasked)}
          />
      </View>
      {
        errorCpf.length > 0 && (
          <View style={{marginVertical:10}}>
              <Text style={{color:'red'}}>{errorCpf}</Text>
          </View>
        )
      }
      <Button 
        title="cadastrar"
        icon={<Icon name="check" size={15} color="white"/>}
        iconRight
        onPress={()=>salvar()}
        titleStyle={{marginHorizontal:30}}
        buttonStyle={{marginTop:50, marginHorizontal:30}}
      />
     </View>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop:30,
    backgroundColor:'green'
  },
  containerMask: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: '#f00',
    fontSize: 12,
  },
  maskedInput: {
    flex: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'flex-start',
  },
  button: {
    marginTop: 80,
    width: '80%',
  },
});