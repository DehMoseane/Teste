function verificaFibonacci(numero) {
    let a = 0, b = 1;

    while (b <= numero) {
        if (b === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

// Exemplo de uso
verificaFibonacci(21);
