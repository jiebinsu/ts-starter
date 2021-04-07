import quoteFox from "../src/quote-fox";

console = {
    ...console,
    log: jest.fn()
}

describe("quoteFox", () => {
    it("should console log given input", () => {
        quoteFox();
        expect(console.log).toBeCalledWith("The quick brown fox jumps over the lazy dog");
    });
});
