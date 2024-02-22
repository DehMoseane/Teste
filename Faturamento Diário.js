const faturamentoMensal = {
    "01": 15000,
    "02": 18000,
    "03": 12000,
    // ... adicione os valores dos dias do mês
};

const diasComFaturamentoSuperiorMedia = Object.values(faturamentoMensal).filter(valor => valor > calcularMedia(faturamentoMensal)).length;

console.log(`Menor valor de faturamento diário: ${Math.min(...Object.values(faturamentoMensal))}`);
console.log(`Maior valor de faturamento diário: ${Math.max(...Object.values(faturamentoMensal))}`);
console.log(`Número de dias com faturamento superior à média: ${diasComFaturamentoSuperiorMedia}`);

function calcularMedia(obj) {
    const valores = Object.values(obj).filter(valor => valor !== 0);
    return valores.reduce((total, valor) => total + valor, 0) / valores.length;
}
