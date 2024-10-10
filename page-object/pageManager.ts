import { Page, expect } from "@playwright/test";
import NavigationPage from "../page-object/navigationPage";
import FormLayoutPage from "../page-object/formLayoutPage";
import DatePickerPage from "../page-object/datepickerPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutPage: FormLayoutPage;
  private readonly datePickerPage: DatePickerPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutPage = new FormLayoutPage(this.page);
    this.datePickerPage = new DatePickerPage(this.page);
  }

  get navigateTo() {
    return this.navigationPage;
  }

  get onFormLayoutPage() {
    return this.formLayoutPage;
  }
  get onDatePickerPage() {
    return this.datePickerPage;
  }
}
