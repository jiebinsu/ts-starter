import { describeYourself } from "../src/describe-yourself";

console = {
    ...console,
    log: jest.fn()
}

describe("describeYourself", () => {
    it("should console log details of person", () => {
        describeYourself({
            name: "ben",
            age: 99,
            dob: {
                day: 1,
                month: 1,
                year: 2000
            }
        });
        expect(console.log).toBeCalledWith("Hello, I am ben, 99 years old and I was born on 1/1/2000");
    });
});
