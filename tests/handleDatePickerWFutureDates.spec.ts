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
  date.setDate(date.getDate()+15)
  const dateToSelectDynamicallyInCalendar = date.getDate().toString()
  const dateToMatchDynamically = ('0' + date.getDate()).slice(-2)
  const yearToSelectDynamically = date.getFullYear()
  const monthToSelectDynamically = ('0' + (date.getMonth()+1)).slice(-2);
  const shortMonth = date.toLocaleString('En-US', { month: 'short' });
  const fullDateToSelectDynamically= `${yearToSelectDynamically}-${monthToSelectDynamically}-${dateToMatchDynamically}`

  console.log(dateToSelectDynamicallyInCalendar)
  console.log(yearToSelectDynamically)
  console.log(monthToSelectDynamically+"hi")
  console.log(fullDateToSelectDynamically)
  console.log(shortMonth)

  let calMonthYear = await page.locator('[class="ant-picker-header-view"]').textContent();
  const MonthYearToSelectInField = `${yearToSelectDynamically}-${monthToSelectDynamically}-${dateToMatchDynamically}`
  const monthYearToSelectInCalendar =`${shortMonth}${yearToSelectDynamically}`
  console.log(monthYearToSelectInCalendar)
  console.log(calMonthYear)

  while(!calMonthYear?.includes(monthYearToSelectInCalendar)){
    console.log(calMonthYear+"hi")
    console.log(monthYearToSelectInCalendar+"Hi2")
    await page.locator('[class="ant-picker-header-next-btn"]').click();
    calMonthYear = await page.locator('[class="ant-picker-header-view"]').textContent();

  }
  //selecting the date

    
      await page.locator('[class="ant-picker-cell-inner"]').getByText(dateToSelectDynamicallyInCalendar, {exact:true}).first().click();
      await page.waitForTimeout(7000) 
      await expect(dateInputValue.first()).toHaveValue(fullDateToSelectDynamically);
      await page.waitForTimeout(7000)    
   

 
    
  

  

});