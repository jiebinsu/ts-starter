interface Person {
    name: String,
    age: number,
    dob: {
        day: number,
        month: number,
        year: number,
    },
}

export const describeYourself = (person: Person) => {
    const { name, age, dob: { day, month, year } } = person;
    console.log(`Hello, I am ${name}, ${age} years old and I was born on ${day}/${month}/${year}`);
}
