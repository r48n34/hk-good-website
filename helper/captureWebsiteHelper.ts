// https://deno.land/x/puppeteer@16.2.0
// deno run -A --unstable --unstable-sloppy-imports --allow-write --allow-read captureWebsiteHelper.ts

import { dataArrGen } from "../src/data/tempData.ts"
import { WebsiteData } from "../src/interface/interface.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

async function newMeProjectsDataListHelper(data: WebsiteData[]){
    const newArr: WebsiteData[] = [];

    const browser = await puppeteer.launch();
    console.log("Starting")

    for(let v of data){

        if(!!v.imageSrc){
            console.log(`Skipping ${v.src}`)
            continue;
        }

        console.log(`Processing ${v.src}`)
        const page = await browser.newPage();

        await page.setViewport({ width: 768, height: 512 });
        await page.goto(v.src);
        await page.waitForTimeout(5000);

        const title = v.title.split(" ").join("_");

        const imgName = `${title}.jpg`
        await page.screenshot({ path: imgName, quality: 40, type: 'jpeg' });

        newArr.push({
            ...v,
            imageSrc: imgName
        })
    }

    await browser.close();
    // console.log(newArr);
    Deno.writeTextFileSync("./addedImageSrc.json", JSON.stringify(newArr));
}

( async () => {
    newMeProjectsDataListHelper(dataArrGen)
})()

export {}