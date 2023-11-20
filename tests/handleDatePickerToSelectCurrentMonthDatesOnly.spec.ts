import { test, expect } from '@playwright/test';

/*
 => A test case to test selection of current month's dates 
    from calendar interface in datepicker 
    (i.e. avoid dates of previous, future months)
    >In this case you have to be careful and observe that the parent classe of each month will be different
 */


test('test DatePicker with current months date selection only', async ({ page }) => {
  await page.goto('https://ant.design/components/date-picker');
  await expect(page.getByRole('heading',{name:'Examples'})).toBeVisible();
  await page.waitForTimeout(5000) //placing a wait as datepicker element is taking time to load
  const dateInputValue =  page.getByPlaceholder('Select date');
  await page.waitForTimeout(2000)
  await dateInputValue.first().click();


  // To ensure that we select 1 only and not 11, 12 ..., exact: true is utilized
  //selecting 1st of current month
  await page.locator('[class="ant-picker-cell-inner"]').getByText('1', {exact:true}).first().click();
  await expect(dateInputValue.first()).toHaveValue('2023-11-01')
  

  //selecting 30th of current month
  await dateInputValue.first().click()
  await page.locator('[class="ant-picker-cell-inner"]').getByText('30').last().click();
  await expect(dateInputValue.first()).toHaveValue('2023-11-30')

  await page.waitForTimeout(2000)
  

});