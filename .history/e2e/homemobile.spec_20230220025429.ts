import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {

    test("Testing for button colors on iPhone XR", async ({ page }) => {
        await page.goto(urlHome);

        const h1 = page.locator(".Art");

        const checkingh1Colour = await h1.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(checkingh1Colour);
        expect(checkingh1Colour).toBe("#faf0e6");
    });
    test('h3 Tag', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('h3')).toContainText("Art pieces are paintings and sculptures that can be purchased from Jolly Redd's Treasure Trawler and donated to the museum,  provided they are not forged. Donating the first piece to the museum will allow Blathers to expand the museum, which requires one day of construction.");
    })
        
    })

