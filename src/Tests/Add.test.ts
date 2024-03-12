import { Calculator } from "@src/Classes/Calculator";

const calculator = new Calculator();

describe("Somar Dois Números", () => {
    test("Deve somar dois números", () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });

    test("Deve somar dois números negativos", () => {
        const result = calculator.add(-1, -2);
        expect(result).toBe(-3);
    });

    test("Deve Somar com Zero", () => {
        const result = calculator.add(0, 0);
        expect(result).toBe(0);
    });
});