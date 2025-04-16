//without using hooks
/*import {Given, When, Then} from '@cucumber/cucumber';
import { chromium,Browser,Page,expect } from '@playwright/test';

let browser: Browser;
let page:Page;

Given('I am on the Conduit login page', async function () {
    browser=await chromium.launch({headless:false});
    page=await browser.newPage();
    await page.goto('https://conduit.bondaracademy.com/');
    await page.waitForTimeout(2000);
    await page.locator('//a[normalize-space()="Sign in"]').click();                
});
       
When('I login with valid credentials', async function () {
    await page.locator('//input[@placeholder="Email"]').fill('testt@test.com');
    await page.locator('input[placeholder="Password"]').fill('Dond');
    await page.locator('button[type="submit"]').click();
          
});
       
       
When('I click the settings button', async function () {
    await page.locator('.nav-link[routerlink="/settings"]').click();

});
       
      
When('I click the logout button', async function () {
    await page.locator('//button[@class="btn btn-outline-danger"]').click();
          
});


Then('I route back to the login page', async function () {
    await expect(page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();
    await browser.close();

});*/

//using hooks

import {Given, When, Then} from '@cucumber/cucumber';
import { chromium,Browser,Page,expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

Given('I am on the Conduit login page', async function () {
    
    await pageFixture.page.goto('https://conduit.bondaracademy.com/');
    await pageFixture.page.waitForTimeout(2000);
    await pageFixture.page.locator('//a[normalize-space()="Sign in"]').click();                
});
       
When('I login with valid credentials', async function () {
    await pageFixture.page.locator('//input[@placeholder="Email"]').fill('testt@test.com');
    await pageFixture.page.locator('input[placeholder="Password"]').fill('Dond');
    await pageFixture.page.locator('button[type="submit"]').click();
          
});
       
       
When('I click the settings button', async function () {
    await pageFixture.page.locator('.nav-link[routerlink="/settings"]').click();

});
       
      
When('I click the logout button', async function () {
    await pageFixture.page.locator('//button[@class="btn btn-outline-danger"]').click();
          
});


Then('I route back to the login page', async function () {
    await expect(pageFixture.page.locator('//a[normalize-space()="Sign in"]')).toBeVisible();

});