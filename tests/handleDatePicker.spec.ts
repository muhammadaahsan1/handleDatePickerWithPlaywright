import { test, expect } from '@playwright/test';

test('test DatePicker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const year = "2023";
  const month = "October";

  await page.click('#datepicker') // opens calender
  while(true)
  {
    const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();
    if (currentYear== year && currentMonth==month)
    {
      break;
    }
    if(currentYear<year){
      await page.locator('[title="Next"]')
    }
    else{
      await page.locator('[title="Previous"]')
    }
  }

});
