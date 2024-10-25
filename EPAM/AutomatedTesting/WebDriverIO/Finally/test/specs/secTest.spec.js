// 'describe' is a function provided by testing frameworks like Mocha or Jasmine that
// allows you to describe a suite of tests for a particular module or component of your application.
describe('Module 3: WebdriverIO Introduction', () => {

    // 'beforeEach' is a hook that runs before each individual 'it' test block.
    // It is used to set up the environment for each test.
    beforeEach(async () => {
      // 'browser.url' is a WebdriverIO command that navigates to a specific URL.
      // 'await' is used to wait for the asynchronous operation to complete.
      await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    });
  
    // 'it' is a function that defines an individual test case.
    // The first argument is a string describing what the test should do.
    it('first test', async () => {
      // '$' is a WebdriverIO command that selects an element on the page using a selector.
      // 'await' waits for the promise to resolve before moving on.
      // 'div[routerLink='/doctors']' is a CSS selector that targets a div with a specific routerLink attribute.
      const doctorsButton = await $("div[routerLink='/doctors']");
      
      // Selects a button element with the class 'e-control' inside an element with the
      // class 'specialization-types', should be used to add a new doctor.
      const addNewDoctorButton = await $('.specialization-types button.e-control');
      
      // Selects an input field for the doctor's name within a container with the ID 'Name'.
      const doctorNameInput = await $('#Name input');
  
      // 'click' is a WebdriverIO command that simulates a click event on an element.
      // Here the code clicks on 'doctorsButton' element which likely takes the user to the doctors section.
      await doctorsButton.click();
      
      // Clicks on 'addNewDoctorButton', likely meant to open a form or modal to add a new doctor.
      await addNewDoctorButton.click();
      
      // 'setValue' is a WebdriverIO command that sets the value of an input field.
      // Here 'doctorNameInput' is set to the string 'John Doe'.
      await doctorNameInput.setValue('John Doe');
      // At this point in the code, the doctor's name 'John Doe' has been entered into the input field,
      // but without further actions or assertions, we cannot confirm if the 'John Doe' was added successfully, 
      // so usually there would be an expectation or assertion following these commands.
    });
  
    // After this test block, more 'it' test blocks would follow to create a series of tests
    // For each aspect of the module or component.
  });