const puppeteer = require('puppeteer');

async function getDollar () {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://www.google.com/search?client=opera&q=preço+dolar&sourceid=opera&ie=UTF-8&oe=UTF-8')

        const getDollarValue = await page.evaluate( () => {
            const getInput = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value
            return getInput
        })
        console.log(`The dollar price is of ${getDollarValue}`)

    } catch (error) {
        console.log(error)
    }
}

getDollar()