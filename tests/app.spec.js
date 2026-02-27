const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Generator Tablicy Poglądowej - Testy Funkcjonalne', () => {
  
  test.beforeEach(async ({ page }) => {
    // Zakładamy, że testujemy lokalny plik lub wdrożoną wersję
    await page.goto('file://' + path.resolve(__dirname, '../index.html'));
  });

  test('Powinien załadować stronę i mieć poprawny tytuł', async ({ page }) => {
    await expect(page).toHaveTitle(/Generator Tablicy Poglądowej Biegłego/);
  });

  test('Powinien zaktualizować dane nagłówka po wpisaniu w inputy', async ({ page }) => {
    await page.fill('#input-sygnatura', 'II K 123/24');
    const displaySygnatura = await page.locator('#display-sygnatura');
    await expect(displaySygnatura).toContainText('SYGNATURA: II K 123/24');
  });

  test('Suwak przybliżenia powinien zmieniać tekst metodyki', async ({ page }) => {
    const zoomRange = await page.locator('#zoom-range');
    await zoomRange.fill('8.5');
    
    const zoomInfo = await page.locator('#zoom-info-text');
    await expect(zoomInfo).toContainText(/8\.5[x×]/);
  });

  test('Reset korekcji powinien przywracać wartości domyślne', async ({ page }) => {
    await page.fill('#corr-brightness', '150');
    await page.click('button:has-text("Reset")');
    
    const brightnessVal = await page.locator('#corr-brightness-val');
    await expect(brightnessVal).toHaveText('100');
  });
});
