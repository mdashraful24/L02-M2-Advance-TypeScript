// ! Explore mapped types


// * map

const arrOfNum: number[] = [1, 2, 3, 4];
const arrOfString: string[] = ["1", "2", "3", "4"];

const arrOfStringUsingMap: string[] = arrOfNum.map((num) => num.toString());

console.log(arrOfStringUsingMap);


// * map type

type ArrOfNum = {
    height: number;
    width: number;
};

type height = ArrOfNum["height"];

// type ArrOfString = {
//     height: number;
//     width: number;
// };

type ArrOfString = {
    [key in "height" | "width"]: string;
};

type ArrOfBoolean = {
    [key in keyof ArrOfNum]: boolean;
};


type Area<T> = {
    [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: boolean; }> = {
    height: "50",
    width: false
}
