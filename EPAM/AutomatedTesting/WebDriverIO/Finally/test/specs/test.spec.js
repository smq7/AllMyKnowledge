
describe("NICE", async () => {
    

    it("f test", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
        const pageTitle = await browser.getTitle();
        console.log(pageTitle);

        expect(pageTitle).toEqual("Appointment Planner - Syncfusion Angular Components Showcase App")
    })

    // it("second test", async() => {
    //     await $("div.doctors").click();
    //     await $("//button[text() ='Add New Doctor']").click();
    //     await $("input[name='Name']").setValue("ITS MY DOCTOR");
    //     await $("//button[text()='Save']").click();

    //     const emailError = await $("label#Email-info");
    //     expect(await emailError.getText()).toEqual("Enter valid email32");
    // })
})
// комментар для майбутніх поколінь шоб встановити норм webdriver над
// встановити версію "@wdio/cli": "^8.40.2", і "webdriverio": "^8.40.2"
// потом над запусттии npx wdio@8.40.2 config 

//  browser можна писати тіки в "IT" бЛОці бо до нього він тіпа не створений шото таке
// 