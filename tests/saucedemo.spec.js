const { test, expect } = require("@playwright/test");

test("Automation Test SauceDemo", async ({ page }) => {
  // a. Login
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // b. Add to cart
  await page.click("text=Add to cart", { strict: false });

  // c. Cart page
  await page.click(".shopping_cart_link");

  // d. Checkout
  await page.click("#checkout");

  // Assertion: halaman checkout muncul
  await expect(page.locator(".title")).toHaveText("Checkout: Your Information");
});
