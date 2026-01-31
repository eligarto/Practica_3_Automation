import { Calculator } from '../calculator.js';

describe('Calculator (Q1)', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should add numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    it('should subtract numbers correctly', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });
});
