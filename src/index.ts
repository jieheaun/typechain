interface Human {
    myname: string;
    age: number;
    gender: string | null;
};

const person = {
    myname: "jieheaun",
    age: 15,
    gender: "male",
};

const sayHi = (person: Human): string => {
    return `Hello ${person.myname}, you are ${person.age}! you are a ${person.gender}!`;
}

console.log(sayHi(person));

export { sayHi };
