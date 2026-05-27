const {chromium} = require ('playwright');
(async () => {
    const browser = await chromium.launch ({headless:false});
    const context = await browser . newContext ();
    const page = await context .newPage ();
    await page.goto ('https://pt.wikipedia.org/');
    await page.screenshot ({path:'wikipedia_foto.png'})
    await browser.close ();
}) ()