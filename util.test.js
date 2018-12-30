const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('James', 40);
    expect(text).toBe('James (40 years old)');
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('James', 40);
    expect(text).toBe('James (40 years old)');
});