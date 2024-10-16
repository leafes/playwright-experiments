import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase"

class NavigationPage extends HelperBase {

  constructor(page: Page) {
    super(page);
  }

  async formLayoutPage() {
    await this.selectGroupItem("Forms");
    await this.page.getByText("Form Layouts").click();
  }

  async datePickerPage() {
    await this.selectGroupItem("Forms");
    await this.page.getByText("Datepicker").click();
  }

  async dialogPage() {
    await this.selectGroupItem("Modal & Overlays");
    await this.page.getByTitle("Dialog").click();
  }

  async windowPage() {
    await this.selectGroupItem("Modal & Overlays");
    await this.page.getByTitle("Window").click();
  }
  private async selectGroupItem(groupItemTitle: string) {
    const groupItem = this.page.getByTitle(groupItemTitle);
    const expandedState = await groupItem.getAttribute("aria-expanded");

    if (expandedState == "false") await groupItem.click();
  }
}

export default NavigationPage;
