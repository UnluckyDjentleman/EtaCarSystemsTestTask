import { test, expect } from "@playwright/test";

test.describe("Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  //portfolio block
  test("Get Input", async ({ page }) => {
    await expect(page.getByTestId("search")).toBeVisible({timeout:10000});
  });

  test("Input search", async ({ page }) => {
    const val: string = "bit";
    const search = await page.getByTestId("search").first();
    await search.fill(val);
    await page.waitForTimeout(10000);
    const rows = page.locator("table tbody tr");
    for (const row of await rows.all()) {
      const nameCell = row.locator("td:nth-child(3)");
      const name = await nameCell.textContent();
      console.log(name);
      expect(name?.toLocaleLowerCase()).toContain(val);
    }
  });
});
