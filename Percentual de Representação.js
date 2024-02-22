const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53,
};

const totalMensal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

const percentuais = {};
for (let estado in faturamentoEstados) {
    percentuais[estado] = (faturamentoEstados[estado] / totalMensal) * 100;
}

console.log("Percentual de representação por estado:");
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
