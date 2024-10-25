import { test, expect } from "@playwright/test";

test.describe("Pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  //pagination block
  test("Pagination", async ({ page }) => {
    const block = await page.getByTestId("pg-block");
    expect(block).toBeVisible();

    //check pagination is working
    const firstPageValues: string[] = [];
    const nextPageValues: string[] = [];
    let rows = await page.locator("table tbody tr").all();
    for (const row of rows) {
      const nameCell = row.locator("td:nth-child(2)");
      const name = await nameCell.textContent();
      firstPageValues.push(name || "");
    }

    await page.locator("a#Next").click();
    rows = await page.locator("table tbody tr").all();
    for (const row of rows) {
      const nameCell = row.locator("td:nth-child(2)");
      const name = await nameCell.textContent();
      nextPageValues.push(name || "");
    }

    expect(firstPageValues).not.toContain(nextPageValues);
  });
});
