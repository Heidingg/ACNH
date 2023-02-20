import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlRanking = "http://localhost:3000/ranking";

test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {

    test("Testing for button colors on iPhone XR", async ({ page }) => {
        await page.goto(urlHome);

        const button = page.locator("h1");

        const checkingButtonColour = await button.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(checkingButtonColour);
        expect(checkingButtonColour).toBe("rgb(240, 230, 140, 1)");
    });
});