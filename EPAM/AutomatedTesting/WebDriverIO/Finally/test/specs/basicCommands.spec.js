describe("Basic Command test", () => {
    beforeEach(async () => {
        // 'browser.url' is a WebdriverIO command that navigates to a specific URL.
        // 'await' is used to wait for the asynchronous operation to complete.
        await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    });

    // it.only  це шоб запустився тіки один вибраний тест
    it("$$ command", async () => {
        const baseElement = await $(".dock");
        const childrenElements = await baseElement.$$(".sidebar-item");
        console.log(childrenElements);
        //
        const elements = (await $(".dock")).$$(".sidebar-item");
        console.log(elements);
    });
   
    it("click command", async () => {
        await $("div[routerLink='/doctors']").click();
        await $(".specialist-display").click();
        
        // await  $(".specialist-display").click({
        //     button: "2",
        //     x:20, // намбер горізонтал пікселей де буде нажіматись на найденому елементі 
        //     y:3
        // });
    });
   
    it("setValue command", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $(".specialization-types button.e-control");
        const doctorNameInput = await $("#Name input");
        await doctorsButton.click();
        await addNewDoctorButton.click();

        await doctorNameInput.setValue("Vadim");
        await browser.pause(5000);
    })

    it("addValue command", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $(".specialization-types button.e-control");
        const doctorNameInput = await $("#Name input");
        await doctorsButton.click();
        await addNewDoctorButton.click();

        await doctorNameInput.setValue("Vadim");
        await doctorNameInput.addValue(" DA DAD A")
        await browser.pause(5000);
    })

    it(" isDisplayed command", async () => {
        const doctorsButton = await $("div[routerLink='/doctors']");
        const doctorNameInput = await $("#Name input");

        console.log(await doctorsButton.isDisplayed());
        console.log(await doctorNameInput.isDisplayed());
    });

    it("isExisting command", async () => {
        await $("div[routerLink='/doctors']").click();
        const addNewDoctorDialog = $(".new-doctor-dialog");
        console.log(await addNewDoctorDialog.isDisplayed());
        console.log(await addNewDoctorDialog.isExisting());
    });

    it("waitForDisplayed command", async () => {
        const doctorButton = await $("div[routerLink='/doctors']");

        console.log(await doctorButton.waitForDisplayed()); // without params
        // await doctorButton.waitForDisplayed({ // with params
        //       timeout: 3000,
        //       reverse: true,
        //       timeoutMsg: 'Desired element did not disappear',
        //       interval: 300
        // })
    })

    it.only("waitForExist command", async () => {
        // await $("div[routerLink='/doctors']").click(); запустити з коментом і без
        const doctorNameInput = await $('#Name input');

        await doctorNameInput.waitForExist(); // without params
    // await doctorNameInput.waitForExist({ // with params
    //         timeout: 3000,
    //         reverse: true,
    //         timeoutMsg: 'Desired element did not disappear',
    //         interval: 300
    //     })
        
    })
})