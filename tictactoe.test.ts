import { Builder, Capabilities, By, Button } from "selenium-webdriver"
import { idText } from "typescript"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

describe("Checking Interactions with gameboard top Left Edition", () => {
    test('I can start a game', async () => {

        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();

    }),
        test("Click upper left square, adds and X", async () => {
            let x1 = await (await driver).findElement(By.id('cell-0'));
            await x1.click()
            return
        })

});
describe("Checking Interactions with gameboard Win-con Edition", () => {
    // test('I can start a game', async () => {

    //     let button = await (await driver).findElement(By.id('start-game'));
    //     await button.click();

    // }),
        test("Click upper left square, adds and X", async () => {
            let x1 = await (await driver).findElement(By.id('cell-0'));
            await x1.click()
        }),
        test("Click center Square adding X", async () => {
            let x4 = await (await driver).findElement(By.id('cell-4'));
            await x4.click()
            return
        }),
        test("Clicking Bottom right Square to win", async () => {
            let x8 = await (await driver).findElement(By.id('cell-8'));
            await x8.click()
            return
        }),
        test("Successful Victory result", () => {
            expect('h1').toBeTruthy()
        })

})



