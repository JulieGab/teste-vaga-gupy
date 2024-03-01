// Verificando se número pertence à sequência de Fibonacci

function seqFibonacci(numero) {
    if (numero === 0 || numero === 1) {
        return true;
    }
    numeroAnterior = 0;
    numeroAtual = 1;

    while(numeroAtual <= numero) {
        proximoNumero = numeroAnterior + numeroAtual;
        if(proximoNumero === numero) {
            return true;
        }
    numeroAnterior = numeroAtual
    numeroAtual = proximoNumero
    }
    return false;
}

numeroInformado = 9

if (seqFibonacci(Number(numeroInformado))) {
    console.log('O número faz parte da sequência de Fibonacci.')
} else {
    console.log('O número não faz parte da sequência de Fibonacci.')
}


