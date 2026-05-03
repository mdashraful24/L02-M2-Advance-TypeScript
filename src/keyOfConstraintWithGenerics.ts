// ! Keyof Constraint with Generics


// * keyof : type operator

type RichPeopleVehicle = {
    car: string; // ? key: value
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const myVehicle1: MyVehicle1 = "cycle";
const myVehicle2: MyVehicle2 = "bike";


// * keyof constraint

interface User {
    id: number;
    name: string;
    address: {
        division: string;
        district: string;
        thana: string;
    };
};

interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
};


const user: User = {
    id: 123,
    name: "Ratul",
    address: {
        division: "Dhaka",
        district: "Gazipur",
        thana: "Sreepur"
    }
};

const product: Product = {
    id: 432,
    name: "Laptop",
    brand: "DCL",
    price: 52000
}

// const myId = user.id;
const myId = user["id"];
const myName = user["name"];

// convert into function

const getPropertyOfObject = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const result1 = getPropertyOfObject(user, "name");
const result2 = getPropertyOfObject(product, "brand");

console.log({ result1, result2 });
