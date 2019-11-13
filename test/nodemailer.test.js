const emailsender = require("../src/email-sender.js");

// Set all module functions to jest.fn
jest.mock(emailsender);

var testSubjectMessage = "Test";
var testHTML = "<h1>Hello World</h1>";

//TODO: Update when sendMessage in email-sender.js takes params for recipients
// and test recipents are created with .env variables
test("Tests if sendMessage is called with recipients, testSubjectMessage, and testHTML", () => {
    var testRecipient = expect( //.env test recipient
        emailsender.sendMessage(testRecipient, testSubjectMessage, testHTML)
    ).toHaveBeenCalledWith(testRecipients, testSubjectMessage, testHTML);
});

test("Tests if sendMessage resolves with expected info", async () => {
    var goodTestRecipient = ""; //TODO: Change to .env test recipeint
    await expect(
        sendMessage(goodTestRecipient, testSubjectMessage, testHTML).resolve(
            goodTestRecipient
        )
    ).resolves.toBe(goodTestRecipient);
});
