import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {

    test("Testing for button colors on iPhone XR", async ({ page }) => {
        await page.goto(urlarts);

        const h1 = page.locator("h1");

        const checkingh1Colour = await h1.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(checkingh1Colour);
        expect(checkingh1Colour).toBe("#f0e68c");
    });
    test('art color', async({ page }) => { 
        await page.goto(urlarts);
        const h1 = page.locator("h1");
        const checkingartColour = await h1.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
    });
    console.log(checkingartColour);
    expect(checkingartColour).toBe("#faf0e6");
})  
    })

