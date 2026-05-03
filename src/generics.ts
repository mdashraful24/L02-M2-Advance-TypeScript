// ! Generics in typescript

// * dynamically generalize kore fela


type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

// const rollNumbers: number[] = [4, 7, 9];
const rollNumbers: GenericArray<number> = [4, 7, 9];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];


// object

type User = { name: string, age: number };

const userList: GenericArray<User> = [
    {
        name: "Mr. X",
        age: 25
    },
    {
        name: "Mst. P",
        age: 22
    },
]


// example like

const sqrFunc = (value: number) => {
    return value * value;
}

sqrFunc(5);


type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [10, 20];
const coordinates2: Coordinates<string, string> = ["10", "20"];


