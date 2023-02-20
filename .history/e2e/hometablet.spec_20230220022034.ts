import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    
    test.describe('Main area', () => {
        test('Header Tag', async({ page }) => {
            await page.goto(urlHome)

            await expect(page.locator('h1')).toContainText('Most Subscribed 1000 Youtube Channels');
        })
    })

    test.describe('Check about page navigates to another page', () => {
        test('Should navigate to Ranking page from homepage', async ({ page}) => {
            await page.goto(urlHome);
            await page.click('text=Museum Arts');
            await expect(page).toHaveURL(urlarts);
        })
    })
});