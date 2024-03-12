import { Calculator } from "@src/Classes/Calculator";

const calculator = new Calculator();

describe("Dividir Dois Números", () => {
    test("Deve Dividir dois números", () => {
        const result = calculator.divide(6, 3);
        expect(result).toBe(2);
    });

    test("Deve Dividir dois números negativos", () => {
        const result = calculator.divide(-6, -3);
        expect(result).toBe(2);
    });
});