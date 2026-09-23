import { test, expect } from '@playwright/test';

test('search on Google', async ({ page }) => {
  await page.goto('https://www.google.com');

  await expect(page).toHaveTitle(/Google/);

  await page.getByRole('combobox', { name: /search/i }).fill('Playwright');

  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);

await page.keyboard.press('Enter');

await expect(page).toHaveTitle(/Playwright/);

await expect(page.getByText('Playwright', { exact: false }).first()).toBeVisible();
});