import { test, expect } from '@playwright/test';

/*
 => A test case to test selection of current month's dates 
    from calendar interface in datepicker 
    (i.e. avoid dates of previous, future months)
 */


test('placing date dynamically on Calendar interface with any date previous or in future', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const targetYear = "2015";
  const targetMonth = "October";
  const date = "27"
  const nextButton = page.locator('[title="Next"]')


  await page.click('#datepicker'); // opens calender

  while(true)
  {
    const currentYear = await page.locator('.ui-datepicker-year').first().textContent();
    
    const currentMonth = await page.locator('.ui-datepicker-month').first().textContent();
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
          await page.locator('[title="Next"]').click();
    }
    else if(currentYear>targetYear){
      await page.locator('[title="Prev"]').click();
    } 

    else if(currentYear==targetYear &&  currmonthNumber>targetMonthInNumber){

      await page.locator('[title="Prev"]').click()
      
      }
   // else block below is considering the situation where (currentYear==targetYear &&  currmonthNumber>targetMonthInNumber)
      else{

        await page.locator('[title="Next"]').click()
        
        }    
    }
    await page.getByRole('link').filter({hasText:date}).click();
    await page.waitForTimeout(4000)

});