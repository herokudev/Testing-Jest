const calculator = require('./calculator');

describe('Add method test', () => {
    test('AddTask1', () => {
        expect(calculator.add(2, 3)).toBe(5)
    });

    test('AddTask2', () => {
        expect(calculator.add(7, 3)).toBe(10)
    });
})

describe('Subtract method test', () => {
    test('subTask1', () => {
        expect(calculator.subtract(3, 1)).toBe(2)
    });

    test('subTask2', () => {
        expect(calculator.subtract(7, 3)).toBe(4)
    });
})

describe('Multiply method test', () => {
    test('multiplyTask1', () => {
        expect(calculator.multiply(3, 1)).toBe(3)
    });

    test('multiplyTask2', () => {
        expect(calculator.multiply(7, 3)).toBe(21)
    });
})

describe('Divide method test', () => {
    test('divideTask1', () => {
        expect(calculator.divide(3, 1)).toBe(3)
    });

    test('divideTask2', () => {
        expect(calculator.divide(6, 3)).toBe(2)
    });q
})