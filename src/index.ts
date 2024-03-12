import * as readlineSync from 'readline-sync';
import { Calculator } from './Classes/Calculator';

async function main() {
    const calculator = new Calculator();

    console.log("Bem Vindo A Sua Calculadora!");

    while (true) {
        console.log("\nEscolha uma Operação:");
        console.log("1. Somar");
        console.log("2. Subtrair");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Sair");

        const choice = readlineSync.question("Digite sua escolha: ");

        if (choice === '5') {
            console.log("Saindo...");
            break;
        }

        const num1 = parseFloat(readlineSync.question("Digite o primeiro número: "));
        const num2 = parseFloat(readlineSync.question("Digite o segundo número: "));

        try {
            let result;
            switch (choice) {
                case '1':
                    result = await calculator.add(num1, num2);
                    break;
                case '2':
                    result = await calculator.subtract(num1, num2);
                    break;
                case '3':
                    result = await calculator.multiply(num1, num2);
                    break;
                case '4':
                    result = await calculator.divide(num1, num2);
                    break; 5
                default:
                    console.log("Escolha Inválida.");
                    continue;
            }
            console.log("Resultado:", result);
        } catch (error: any) {
            console.log("Erro:", error.message);
        }
    }
}

main();
