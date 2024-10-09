import { Page } from "@playwright/test";

class FormLayoutPage {

  readonly page: Page;

  constructor (page: Page) {
    this.page = page;
  }

  async submitUsingTheGridFormWithCredentialsAndSelectorOption(email: string, password: string, optionText: string) {
    const gridForm = this.page.locator('nb-card', { hasText: "Using the Grid"});
    await gridForm.getByRole('textbox', { name: "Email"}).fill(email);
    await gridForm.getByRole('textbox', {name: "password"}).fill(password);
    await gridForm.getByRole('radio', {name: optionText}).check({force: true});
    await gridForm.getByRole('button').click();
  }
/**
 * This method fill out inline form with user credentials
 * @param fullname user's fullname
 * @param email 
 * @param rememberOption true to select "remember me" checkbox
 */
  async submitUsingTheInlineForm(fullname: string, email: string, rememberOption: boolean) {
    const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"});
    await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(fullname);
    await inlineForm.getByRole('textbox', { name: "Email"}).fill(email);
    if (rememberOption) await inlineForm.getByRole('checkbox').check({force: true});
    await inlineForm.getByRole('button').click();
  }
}


export default FormLayoutPage;