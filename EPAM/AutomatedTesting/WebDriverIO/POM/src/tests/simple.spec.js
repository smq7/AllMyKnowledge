describe("Doctors page", () => {
    beforeEach(async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    });
    
    it("Test check title", async() => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("open modal window", async() => {
        await $('[routerlink="/doctors').click();
        
        await $(".specialization-types button.e-control").click();

        await expect($(".new-doctor-dialog")).toBeDisplayed();
        // await browser.pause(2000);
    });

    it("Add new doctor", async() => {
        await $('[routerlink="/doctors').click();
        
        await $(".specialization-types button.e-control").click();

        await $(".new-doctor-dialog").waitForDisplayed();
        await $('[name="Name"]').setValue("DOCTOR S cartinki");
        await $('#DoctorMobile').setValue("2313123213");
        await $('[name="Email"]').setValue("email@mail.ua");
        await $('[name="Education"]').setValue("Basic");
        await $('[name="Designation"]').setValue("Cartinka");
 
        await $('.e-footer-content button.e-primary').click();

        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

        await expect($("#Specialist_8").$('.name')).toHaveText("Dr. DOCTOR S cartinki");

        await browser.pause(2000);
    });

    it("close modal vindow", async() => {
        await $('[routerlink="/doctors').click();

        await $(".specialization-types button.e-control").click();
        await $(".new-doctor-dialog").waitForDisplayed();
        await $(".new-doctor-dialog .e-dlg-closeicon-btn").click();
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();

    })

})