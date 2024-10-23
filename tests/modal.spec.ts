import {test, expect} from "@playwright/test"

test.describe('Modal',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('http://localhost:5173')
    });

    //portfolio block
    test('Get Portfolio Block', async ({page})=>{
        await expect(page.getByTestId('portfolio')).toBeVisible();
        await expect(page.locator("table tbody tr>>text=Add").first()).toBeVisible();
    })

    test('Get Portfolio', async ({page})=>{
        await page.getByTestId('portfolio').click();
        await expect(page.getByTestId('modal-list')).toBeVisible();

        //test coins
        const coins=await page.getByTestId('modal-list').locator('li').all();
        if(coins.length!==0){
            await coins[0].all()[-1].click();
            const coinsUpdated=await page.getByTestId('modal-list').locator('li').all();
            await expect(coinsUpdated.length).toBeLessThan(coins.length);
        }
    })

    //add coins to portfolio
    test('Add Coin',async ({page})=>{
        await page.getByRole('button',{name: 'Add'}).first().click();
        const modalAdd=page.getByTestId('modal-add')
        await expect(modalAdd).toBeVisible();

        //input value
        const input=modalAdd.getByTestId('input').first();
        await input.focus();

        console.log(input);
        await input.fill("20");

        //test
        const inputValue=await input.inputValue();
        await expect((+inputValue)).toBeGreaterThanOrEqual(1);
        await expect((+inputValue)).toBeLessThanOrEqual(50);
    })
})