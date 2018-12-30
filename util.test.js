const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

// Unit Test
test('should output name and age', () => {
    const text = generateText('James', 40);
    expect(text).toBe('James (40 years old)');
});

// Integration Test
test('should generate a valid text output', () => {
    const text = checkAndGenerate('James', 40);
    expect(text).toBe('James (40 years old)');
});

// End To End Test (e2e)
test('should create an element with text and correct class', async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 80,
        // args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', (el) => {
        return el.textContent;
    });
    expect(finalText).toBe('Anna (28 years old)');
}, 10000); // Due to Jest timing out after 5 seconds I've had to extend the time out to 10 seconds.