import { test, expect } from '@playwright/test';

test('test DatePicker', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const targetYear = "2024";
  const targetMonth = "October";


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

      else if(currentYear==targetYear && currmonthNumber<targetMonthInNumber){

        await page.locator('[title="Next"]').click()
        
        }    


    }
    await page.waitForTimeout(5000)



});