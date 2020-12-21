const puppeteer = require('puppeteer')
const fs = require('fs');


async function getInstagramImages() {
    try{
        
    //PPT START    
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/suporte_ti_online/');

    //GET IMGS FROM INSTAGRAM
    const imgList = await page.evaluate( () => {
        const nodeList = document.querySelectorAll('article img');
        const toArray = [...nodeList];
        const returnedImg = toArray.map( img => ({
            src: img.src
        }));
        return returnedImg
    });

    setTimeout( async () => {
        await browser.close();
    }, 10000);

    //WRITE  IN LOCAL MACHINE THE IMGS
    fs.writeFile('myInstagram.json', JSON.stringify(imgList, null, 2), error => {
        error? console.log(error): console.log('File created with success.');
    });

    }catch(error){
        console.log(error)
    }
} 

getInstagramImages();

