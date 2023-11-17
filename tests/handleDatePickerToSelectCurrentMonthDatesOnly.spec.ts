import { test, expect } from '@playwright/test';

/*
 => A test case to test selection of current month's dates 
    from calendar interface in datepicker 
    (i.e. avoid dates of previous, future months)
 */


test('test DatePicker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const targetYear = "2021";
  const targetMonth = "October";
  const date = "27"
  const nextButton = page.locator('[title="Next"]')
  const previousButton = page.locator('[title="Prev"]')
  const currYearLocator = page.locator('.ui-datepicker-year').first();
  const currMonthLocator = page.locator('.ui-datepicker-month').first();

  await page.click('#datepicker'); // opens calender
 

  while(true)
  {
    const currentYear = await currYearLocator.textContent();
    const currentMonth = await currMonthLocator.textContent();
    
    function getMonthNumberFromName(monthName) {
      return new Date(`${monthName} 1, 2022`).getMonth() + 1;
    }
    const currmonthNumber = getMonthNumberFromName(currentMonth) 
    const targetMonthInNumber = getMonthNumberFromName(targetMonth) 

    if(currentYear== targetYear && currmonthNumber==targetMonthInNumber)
      {
        break;
      }
      else if(currentYear<targetYear){
          await nextButton.click();
          
    }
    else if(currentYear>targetYear){
      await previousButton.click();
    } 

    else if(currentYear==targetYear &&  currmonthNumber>targetMonthInNumber){

      await previousButton.click();
      
      }
   // else block below is considering the situation where (currentYear==targetYear &&  currmonthNumber>targetMonthInNumber)
      else{

        await nextButton.click();
        
        }    
    }
    await page.getByRole('link').filter({hasText:date}).click();
    await page.waitForTimeout(2000);

});