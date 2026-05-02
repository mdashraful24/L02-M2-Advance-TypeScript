// ! Type Interface

//  * only work in interface: object type: array, object, function


type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: "admin" | "user";
};

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: "admin" | "user";
}

const user1: UserWithRole = {
    name: "Ashraful Islam Ratul",
    age: 25,
    role: "admin"
}

const user2: IUserWithRole = {
    name: "Ratul",
    age: 25,
    role: "user"
}


// * interface not declare when using primitive type

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;


type Add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number
}

const add: IAdd = (num1, num2)=>{
    
}

type Friends = string[];

interface IFriends {
    [index: number]: string
}

const friends: IFriends = ["A", "B", "C"];
