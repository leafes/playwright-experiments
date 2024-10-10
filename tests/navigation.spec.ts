import { test, expect } from "@playwright/test";
import {PageManager} from "../page-object/PageManager"

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Fill email and password into grid", async ({ page }) => {
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutPage();
  await pm.onFormLayoutPage().submitUsingTheGridFormWithCredentialsAndSelectorOption(
    "bibkin@bibin.com",
    "sobaka",
    "Option 2"
  );
});

test("Fill fullname and email into inline form", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutPage();
  await pm.onFormLayoutPage().submitUsingTheInlineForm("Axel Boyko", "boyko@gmail,com", true);
});

test("Pick date in common datepicker", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().datePickerPage();
  await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(1);
})

test("Pick date in range datepicker", async ({page}) => {
  const pm = new PageManager(page);

  await pm.navigateTo().datePickerPage();
  await pm.onDatePickerPage().selectDatePickerWithRange(1,13);
})