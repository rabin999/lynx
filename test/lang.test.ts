import lang from "../app/assets/langs"

describe('Language Test', () => {
    it('when user select lang in en, should return en.json content', () => {
        expect(lang["environment"]).toEqual("Environment not found");
    });
});