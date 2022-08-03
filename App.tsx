import {ThemeProvider} from 'styled-components';
import { StyleSheet, View } from 'react-native';

import {Load} from './src/components/Load';
import {ValidationManual} from './src/screens/Validations/ValidationManual';
import {ValidationLibExterna} from './src/screens/Validations/ValidationLibExterna';
import {ValidationReactHookForm} from './src/screens/Validations/ValidationReactHookForm';


/* import {Login} from './src/screens/Requisicoes/Login'; */

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {THEME} from './src/global/styles/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if(!fontsLoaded) {return <Load/>} 
   
  
  return (
    <ThemeProvider theme={THEME}>
      {/* <ValidationManual/> */}
      {/* <Login /> */}
      {/* <ValidationLibExterna /> */}
      <ValidationReactHookForm />
    </ThemeProvider>
  );
}
