import { test, expect } from "@playwright/test";
test.describe("Sort check", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("Get Sort Field", async ({ page }) => {
    await expect(page.getByTestId("sort-option")).toBeVisible();
  });

  test("Sort By Price Ascending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Price Asc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-child(4)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeLessThanOrEqual(values[val + 1]);
    }
  });

  test("Sort By Price Descending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Price Desc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-child(4)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeGreaterThanOrEqual(values[val + 1]);
    }
  });

  test("Sort By Market Cap Ascending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Market Cap Asc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-last-child(3)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeLessThanOrEqual(values[val + 1]);
    }
  });

  test("Sort By Market Cap Descending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Market Cap Desc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-last-child(3)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeGreaterThanOrEqual(values[val + 1]);
    }
  });

  test("Sort By Change Ascending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Change Asc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-last-child(2)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeLessThanOrEqual(values[val + 1]);
    }
  });

  test("Sort By Change Descending", async ({ page }) => {
    await page.getByTestId("sort-option").selectOption("Change Desc");
    await page.waitForTimeout(5000);

    const values: number[] = [];
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const cell = row.locator("td:nth-last-child(2)");
      const value = await cell.textContent();
      values.push(Number(value?.slice(0, -1)));
    }

    for (let val = 0; val < values.length - 1; val++) {
      expect(values[val]).toBeGreaterThanOrEqual(values[val + 1]);
    }
  });
});
