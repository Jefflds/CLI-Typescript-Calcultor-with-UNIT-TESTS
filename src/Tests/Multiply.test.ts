import { Calculator } from "@src/Classes/Calculator";

const calculator = new Calculator();

describe("Multiplicar Dois Números", () => {
    test("Deve Multiplicar dois números", () => {
        const result = calculator.multiply(3, 2);
        expect(result).toBe(6);
    });

    test("Deve Multiplicar dois números negativos", () => {
        const result = calculator.multiply(-4, -2);
        expect(result).toBe(8);
    });

    test("Deve Multiplicar com Zero", () => {
        const result = calculator.multiply(5, 0);
        expect(result).toBe(0);
    });
});