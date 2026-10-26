// @ts-check
import { test, expect } from 'playwright/test';

test ('Локатори на практиці', async ({ page }) => {
await page.goto('http://localhost:5173/')
await expect (page.getByRole('article').first()).toBeVisible()

});