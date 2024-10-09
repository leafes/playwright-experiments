import { Page } from "@playwright/test";

class DatePickerPage {
  readonly page : Page;

  constructor (page: Page) {
    this.page = page;
  }

  async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number = 0){
    const commonDatePicker = this.page.getByPlaceholder("Form Picker");
    await commonDatePicker.click();

    const date = new Date()
    const daysFromToday = String(date.getDate() + numberOfDaysFromToday);
    
    const calendarContainer = this.page.locator('nb-calendar-day-picker');
    const todaysDateInCalendarUI = calendarContainer.locator('nb-calendar-day-cell', {hasText: daysFromToday});
    await todaysDateInCalendarUI.click();
  }

  async selectDatePickerWithRange(startDate: number, endDate: number) {
    const rangeDatePicker = this.page.getByPlaceholder("Range Picker");
    await rangeDatePicker.click();

    // const date = new Date()
    // const daysFromToday = String(date.getDate() + numberOfDaysFromToday);
    
    const calendarContainer = this.page.locator('nb-calendar-day-picker');
    const selectStartDate = calendarContainer.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(startDate.toString(), {exact: true});
    const selectEndDate = calendarContainer.locator('[class="range-cell day-cell ng-star-inserted"]').getByText(endDate.toString(), {exact: true})

    await selectStartDate.click();
    await selectEndDate.click();
  }
}

export default DatePickerPage;