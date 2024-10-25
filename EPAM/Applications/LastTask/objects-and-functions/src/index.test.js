const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { readTextFile } = require("../test-utils/readTextFile");
const { waitBrowserLoadEvent } = require("../test-utils/waitBrowserEvent");
const {
    addFileProtocolToElements,
} = require("../test-utils/addFileProtocolToElements");
const {
    replaceScriptSrcFilePathInString,
} = require("../test-utils/replaceScriptSrcFilePathInString");

describe("Objects and functions", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on("log", consoleLogListener);

        const filePath = path.join(__dirname, "index.html");
        htmlString = await readTextFile(filePath);
        const newHtmlString = replaceScriptSrcFilePathInString(
            htmlString,
            ["script.js"],
            __dirname
        );

        // Create fake DOM
        dom = new JSDOM(newHtmlString, {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });
        document = dom.window.document;

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll(
            'link[rel="stylesheet"]'
        );
        addFileProtocolToElements(linkElements, "href", __dirname);
    });

    describe("sumPrices", () => {
        it("should sum prices from fields", async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: "Stan",
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it("should ignore Infinity value", async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: "Stan",
                inf: Infinity,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it("should ignore -Infinity value", async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: "Stan",
                inf: -Infinity,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it("should ignore NaN value", async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: "Stan",
                someNaN: NaN,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });
    });

    describe("createUserWithFullName", () => {
        it("should have firstName property", async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName("Will", "Smith");

            expect(user.firstName).toBe("Will");
        });

        it("should have lastName property", async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName("Will", "Smith");

            expect(user.lastName).toBe("Smith");
        });

        it("should create object with setFirstName method", async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName("Bill", "Murray");
            const newFirstName = "Robert";
            user.setFirstName(newFirstName);

            expect(user.firstName).toBe(newFirstName);
        });

        it("should create object with setLastName method", async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName("Bill", "Murray");
            const newLastName = "Downey";
            user.setLastName(newLastName);

            expect(user.lastName).toBe(newLastName);
        });

        it("should create object with getFullName method", async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName("Bill", "Murray");

            expect(user.getFullName()).toBe("Bill Murray");
        });
    });

    describe("countLetters", () => {
        it("should return object {a: 4, b: 3} for given input 'abababa'", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("abababa")).toEqual({ a: 4, b: 3 });
        });

        it("should return object {a: 1, s: 2, d: 3, f: 4} for given input 'asdf sdf df f'", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("asdf sdf df f")).toEqual({
                a: 1,
                s: 2,
                d: 3,
                f: 4,
            });
        });

        it("should return object {} for given input ''", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("")).toEqual({});
        });
    });
});
