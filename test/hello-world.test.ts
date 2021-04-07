import { sayHello } from "../src/hello-world";

console = {
    ...console,
    log: jest.fn()
}

describe("sayHello", () => {
    it("should console log given input", () => {
        sayHello("world");
        expect(console.log).toBeCalledWith("hello world");
    });
});
