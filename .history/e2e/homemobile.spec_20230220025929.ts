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
        expect(checkingh1Colour).toBe("rgb(240, 230, 140, 1)");
    });
    test('art color', async({ page }) => { 
        await page.goto(urlarts);
        const art = page.locator(".Art");
        const checkingartColour = await art.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
    });
    console.log(checkingartColour);
    expect(checkingartColour).toBe("rgb(250, 240, 230)");
})  
    })

