import { test, expect } from '@playwright/test';

test('test DatePicker w Future Dates', async ({ page }) => {

    await page.goto('https://ant.design/components/date-picker');
    await expect(page.getByRole('heading',{name:'Examples'})).toBeVisible();
    await page.waitForTimeout(5000) //placing a wait as datepicker element is taking time to load
    const dateInputValue =  page.getByPlaceholder('Select date');
    await page.waitForTimeout(2000)
    await dateInputValue.first().click();
  
  //Dynamically selecting Date

  let date = new Date()
  date.setDate(date.getDate()+5)
  const dateToSelectDynamically = date.getDate().toString()
  const yearToSelectDynamically = date.getFullYear()
  const monthToSelectDynamically = date.getMonth()+1
  const fullDateToSelectDynamically= `${yearToSelectDynamically}-${monthToSelectDynamically}-${dateToSelectDynamically}`

  console.log(dateToSelectDynamically)
  console.log(yearToSelectDynamically)
  console.log(monthToSelectDynamically)
  console.log(fullDateToSelectDynamically)


  

});