// ! Type Assertion

// * define type better than typescript.


// example 1

let anything: any;

anything = "Ratul";

(anything as string)


// example 2

const kgToGMConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" "); // * array destructuring
        return `Converted output is: ${Number(value) * 1000}`;
    }
};

const result1 = kgToGMConverter(5) as number;
console.log({ result1 });

const result2 = kgToGMConverter("5 kg") as string;
console.log({ result2 });


// example 3

type CustomError = {
    message: string;
};

try {
} catch (err) {
    console.log((err as CustomError).message);
}
