import * as Yup from 'yup';

export const schemaValidation = Yup.object({
  nome: Yup.string()
        .required('Por favor, forneça um nome!')
        .min(3,'o nome deve ser no minimo 3 caracteres'),
  email: Yup.string()
        .email('email inválido')
        .required('Por favor, forneça um email!'),
  senha: Yup.string()
        .min(6,'password menor que 6 caracteres')
        .max(10,'password maior que 10 caracteres')
        .required('Por favor, forneça uma senha!'),
  cpf: Yup.string()
        .required('Por favor, forneça uma cpf!')
        .length(14,'cpf inválido'),
});