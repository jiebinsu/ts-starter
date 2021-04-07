import { sayHello, quoteFox, describeYourself } from "./dist/index.js";

sayHello("world");
quoteFox();
describeYourself({
    name: "ben",
    age: 99,
    dob: {
        day: 1,
        month: 2,
        year: 3000
    }
});
