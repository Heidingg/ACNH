import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    
    test('Carousel main container area stylizing', async({ page }) => { 
        await page.goto(urlAbout)

        const carousel = page.locator('#carouselImage');

        const grabbedHeight = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })
        console.log(grabbedHeight);
        expect(grabbedHeight).toBe("200px");
    })

    test.describe('Check about page navigates to another page', () => {
        test('Should navigate to Arts page from homepage', async ({ page}) => {
            await page.goto(urlHome);
            await page.click('text=Museum Arts');
            await expect(page).toHaveURL(urlarts);
        })
    })
});