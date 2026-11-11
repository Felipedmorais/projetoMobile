// 5.96 -> "R$ 5,96" | 1500 -> "R$ 1.500,00"
export function formatarReal(valor) {
  const texto = valor.toFixed(2).replace('.', ',');
  return 'R$ ' + texto.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// "5,99" ou "5.99" -> 5.99 (NaN se for inválido)
export function lerPreco(texto) {
  return Number(texto.trim().replace(',', '.'));
}

// "25" -> 25 (NaN se não for inteiro, 0 ou mais)
export function lerQtd(texto) {
  const n = Number(texto.trim());
  return texto.trim() !== '' && Number.isInteger(n) && n >= 0 ? n : NaN;
}
