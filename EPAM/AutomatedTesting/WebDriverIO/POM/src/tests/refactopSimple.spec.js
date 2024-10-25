const {pages} = require('./../po');

describe("Refactoring",  () => {
    beforeEach(async () => {
        await pages("dashboard").open();
    }); 
    
    it("check page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("open modal window", async ()=> {
        await pages("dashboard").sideMenu.item('doctors').click();
        
        await pages("doctors").doctorListHeader.addNewDoctorBtn.click();

        await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
    });

    it("add a new doctor ", async() =>{
        await pages("dashboard").sideMenu.item('doctors').click();

        await pages("doctors").doctorListHeader.addNewDoctorBtn.click();

        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();

        await pages('doctors').addDoctorModal.input('name').setValue("DOCTOR S cartinki");
        await pages('doctors').addDoctorModal.input('phone').setValue("11111111111");
        await pages('doctors').addDoctorModal.input('email').setValue("test@test.com");
        await pages('doctors').addDoctorModal.input('education').setValue("Basic");
        await pages('doctors').addDoctorModal.input('designation').setValue("Test");

        await pages("doctors").addDoctorModal.saveBtn.click();

        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

        await expect(pages('doctors').specialistCard(8).name).toHaveText("Dr. DOCTOR S cartinki");

    })

    it("close a modal window", async () => {
        await pages('dashboard').sideMenu.item('doctors').click();
        await pages('doctors').doctorListHeader.addNewDoctorBtn.click();
        await pages('doctors').addDoctorModal.rootEl.waitForDisplayed();
        await pages('doctors').addDoctorModal.closeBtn.click();
        await expect(pages('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
    })

});