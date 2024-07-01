import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  const { email, password } = require("../user");
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();
  await page.getByRole("heading", { name: "Моё обучение" }).click();
  await expect(page).toHaveURL("https://netology.ru/profile/8745941");
});

test("test2", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("sfgdfhdfhgdfghfgh@mail.ru");
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill("sdgdfgjhfgdfhsdfg454355");
  await page.getByTestId("login-submit-btn").click();
  await page.getByTestId("login-error-hint").click();
  await expect(page.getByTestId("login-error-hint")).toContainText(
    "Вы ввели неправильно логин или пароль"
  );
});
