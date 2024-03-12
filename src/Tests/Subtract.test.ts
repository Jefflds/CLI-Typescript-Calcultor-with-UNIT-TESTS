import { Calculator } from "@src/Classes/Calculator";

const calculator = new Calculator();

describe("Subtrair Dois Números", () => {
    test("Deve Subtrair dois números", () => {
        const result = calculator.subtract(3, 2);
        expect(result).toBe(1);
    });

    test("Deve Subtrair dois números negativos", () => {
        const result = calculator.subtract(-4, -2);
        expect(result).toBe(-2);
    });

    test("Deve Subtrair com Zero", () => {
        const result = calculator.subtract(5, 0);
        expect(result).toBe(5);
    });
});