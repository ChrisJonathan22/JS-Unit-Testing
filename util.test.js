const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('James', 40);
    expect(text).toBe('James (40 years old)');
});