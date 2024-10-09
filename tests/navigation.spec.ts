import { test, expect } from "@playwright/test";
import NavigationPage from "../page-object/navigationPage";
import FormLayoutPage from "../page-object/formLayoutPage";
import DatePickerPage from "../page-object/datepickerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Fill email and password into grid", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const formLayout = new FormLayoutPage(page);
  await navigateTo.formLayoutPage();
  await formLayout.submitUsingTheGridFormWithCredentialsAndSelectorOption(
    "bibkin@bibin.com",
    "sobaka",
    "Option 2"
  );
});

test("Fill fullname and email into inline form", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const formLayout = new FormLayoutPage(page);
  await navigateTo.formLayoutPage();
  await formLayout.submitUsingTheInlineForm("Axel Boyko", "boyko@gmail,com", true);
});

test("Pick date in common datepicker", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const datePicker = new DatePickerPage(page);

  await navigateTo.datePickerPage();
  await datePicker.selectCommonDatePickerDateFromToday(1);
})

test("pick date in range datepicker", async ({page}) => {
  const navigateTo = new NavigationPage(page);
  const datePicker = new DatePickerPage(page);

  await navigateTo.datePickerPage();
  await datePicker.selectDatePickerWithRange(1,13);
})