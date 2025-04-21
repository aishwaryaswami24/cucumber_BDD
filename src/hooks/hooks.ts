import { After,Before, Status } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let page: Page;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    //@ts-ignore
    pageFixture.page = page;
})

After(async function ({pickle, result}) {
    if (result?.status === Status.FAILED) {

        // Take a screenshot if the test failed
        const screenshot = await page.screenshot({path:` 'screenshots',${pickle.name}.png`});
        this.attach(screenshot, 'image/png');
    }
    await page.close();
    await browser.close();

})