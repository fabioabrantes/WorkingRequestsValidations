export function maskCpf(value: string) {
  value = value.replace(/\D/g, ''); // 1239856
  if (value.length > 11) {
    value = value.slice(0, -1);
  }
  //111.111.111-11 formato cpf
  value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  return value;
}