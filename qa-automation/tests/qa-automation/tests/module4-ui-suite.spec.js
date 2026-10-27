import { test, expect } from '@playwright/test';

test.describe('Вхід у Tasteorama', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login');
  });

  test('успішний вхід переводить на головну сторінку', async ({ page }) => {
    const emailField = page.locator('#email');
    const passwordField = page.locator('#password');
    const submitButton = page.locator('button[type="submit"]');

    await emailField.fill(process.env.TEST_EMAIL);
    await passwordField.fill(process.env.TEST_PASSWORD);
    await submitButton.click();

    await expect(page).toHaveURL('/');
    
  });
  test('неправильний пароль показує помилку і залишає на сторінці входу', async ({ page }) => {
  const emailField = page.locator('#email');
  const passwordField = page.locator('#password');
  const submitButton = page.locator('button[type="submit"]');
  const errorMessage = page.getByRole('alert');

  await emailField.fill(process.env.TEST_EMAIL);
  await passwordField.fill('wrong-password');
  await submitButton.click();

  // toHaveText: текст тоста всегда один и тот же, без змінної частини
  await expect(errorMessage).toHaveText('UnauthorizedError');
  await expect(page).toHaveURL('/auth/login');
});
});

test.describe('Список рецептів', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('перша картка списку рецептів видима', async ({ page }) => {
    const recipeCards = page.locator('article');

    // .first() законний: вимога саме про першу картку, порядок є частиною перевірки
    await expect(recipeCards.first()).toBeVisible();
    expect(await recipeCards.count()).toBeGreaterThan(0);
  });
 test('після переходу далі кнопка попередньої сторінки стає активною', async ({ page }) => {
  // aria-label стабільний: на кнопці іконка, видимого тексту немає
  const previousPage = page.getByRole('button', { name: 'previous page' });
  const nextPage = page.getByRole('button', { name: 'next page' });

  await expect(previousPage).toBeDisabled();
  await nextPage.click();
  await expect(previousPage).toBeEnabled();
});
});




