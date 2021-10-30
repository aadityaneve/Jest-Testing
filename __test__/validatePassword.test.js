const validatePassword = require("../functions/validatePassword.js");

describe('Testing Password:', () => {
    
    test('Case 1:', () => {
        expect(validatePassword("abcdefg1A!")).toBe("valid");
    })
    test('Case 2:', () => {
        expect(validatePassword("123!Aaw")).toBe("valid");
    })
    test('Case 3:', () => {
        expect(validatePassword("&^wnAw21")).toBe("valid");
    })
    test('Case 4:', () => {
        expect(validatePassword("678ui5@Y")).toBe("valid");
    })
    test('Case 5:', () => {
        expect(validatePassword("HI87%jh")).toBe("valid");
    })
    test('Case 6:', () => {
        expect(validatePassword("()78uiU)")).toBe("valid");
    })
    test('Case 7:', () => {
        expect(validatePassword("YT76&*kj")).toBe("valid");
    })
    

})
