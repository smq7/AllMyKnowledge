describe("Advanced Command", () => {
    beforeEach(async () => {
        await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
    });

    it("execute command", async () => {
        const doctor = await $('a[href="#/doctor-details/5"]');

        await browser.execute(function(doctor) {
            doctor.style.border = 'red solid 2px';
        }, doctor);
        
        //так робити не буде бо в функцію шо в середині над через execute передати параметр
        // await browser.execute(function(doctor) {
        //     doctor.style.border = 'red solid 2px';
        // }, );
        
        await browser.pause(3000);
    });

    it("executeAsync command", async () => {
        const doctor = await $("a[href='#/doctor-details/5']");

        await browser.executeAsync(function(doctor, done) {
        setTimeout(() => {
            doctor.style.border = "red solid 2px";
            done();
        }, 2000);
        }, doctor);
        await browser.pause(3000);
    });

    it("command", async () => {
        await browser.url("https://ej2.syncfusion.com/react/demos/progress-bar/semi-circular/");
        await $("#reLoad").click();

        await browser.waitUntil(
            async () => await $("#point1").getText() === "100%",
                { 
                    timeout: 5000,
                    // timeout: 1000,  
                    interval: 600, 
                    timeoutMsg: "not loaded" 
                }
        );
    });

    it("setCookies command", async () => {
        await browser.pause(5000);
        await browser.setCookies([{name: "customCookie", value: "42"}]);
        
        await browser.pause(10000);
    });

    it("getCookies command", async () => {
        await browser.setCookies([{name: "customCookie", value: "42"}]);
        const cookie = await browser.getCookies(["customCookie"]);
        console.dir(cookie);
    });

    it("deleteCookies command", async () => {
        await browser.setCookies([{name: "customCookie", value: "42"}]);
        await browser.pause(1000);
        await browser.deleteCookies(["customCookie"]);
    });

    it("getAttribute command", async () => {
        const element = await $("a[href='#/doctor-details/5']");

        const href = await element.getAttribute("href");
        console.log("THIS IS ISI SI");
        console.log(href)
    });

    it("getProperty command", async () => {
        const element = await $("a[href='#/doctor-details/5']");

        const href = await element.getProperty("href");

        console.log("THIS IS ISI SI");
        console.log(href)
    });

    it("localStorage", async() => {
        
        const key = "localStorageKey";
        const value = "localStorageValue";


        await browser.execute(function (key, value) {
            window.localStorage.setItem(key, value);
        }, key, value);


        const readValue = await browser.execute(function (key) {
            return window.localStorage.getItem(key);
        }, key);
        console.log(readValue);
        await browser.pause(10000);
    });

    it.only("performActions command", async() => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar");
        const slot1 = await $("[data-date='1596373200000']");
        const slot2 = await $("[data-date='1596382200000']");

        const SHIFT = "\uE008";
        await slot1.click();
        await browser.performActions([
            {
                type: "key",
                id:"keyboard",
                actions: [
                    {
                        type:"keyDown",
                        value: SHIFT,
                    },
                ],
            },
        ]);

        await slot2.click();
        await browser.pause(500);
        await browser.performActions([
            {
                type: "key",
                id:"keyboard",
                actions: [
                    {
                        type:"keyUp",
                        value: SHIFT,
                    },
                ],
            },
        ]);
        await browser.releaseActions();
        await browser.pause(5000);
        // const row = await $("div.e-content table tbody tr:first-child");
        
        // await row.moveTo();
        // await browser.pause(3000);

        // describe('Right Click Example', () => {
        //     it('should perform a right-click using performActions', async () => {
        //         await browser.url('https://example.com');
        
        //         // Находим элемент
        //         const element = await $('#someElementId');
        
        //         // Получаем координаты элемента для выполнения действия
        //         const rect = await element.getRect();
        
        //         // Выполняем клик правой кнопкой мыши на элементе
        //         await browser.performActions([{
        //             type: 'pointer',
        //             id: 'mouse1',
        //             parameters: { pointerType: 'mouse' },
        //             actions: [
        //                 { type: 'pointerMove', origin: element, x: 0, y: 0 },
        //                 { type: 'pointerDown', button: 2 }, // Нажатие правой кнопкой (2 - правая кнопка мыши)
        //                 { type: 'pointerUp', button: 2 }    // Отпускание правой кнопки
        //             ]
        //         }]);
        
        //         // Обязательно завершите действия
        //         await browser.releaseActions();
        //     });
        // });

    });
});