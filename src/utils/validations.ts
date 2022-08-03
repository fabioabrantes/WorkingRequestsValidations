export function validateEmail(email: string): boolean {
  let validate = false;
  const formatEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
  if (email.toLowerCase().match(formatEmail)) {
    validate = true;
  }
  return validate;
}

export function validatePassword(password: string): boolean {
  let validate = false;
  if(password && password.length >=3) validate = true;
  
  return validate;
}

export function validaCpf(cpf: string): boolean {
  let validate = true;
  const padraoCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpf.toLowerCase().match(padraoCPF)) {
    validate = false;
  }
  return validate;
}

export function validateName(name: string): boolean {
  let validate = false;
  if(name.length >= 3) validate = true;
  return validate;
}