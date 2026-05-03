// ! Generics with function


// const createArrWithString = (value: string) => [value];

// const createArrWithNumber = (value: number) => [value];

// const createArrWithObject = (value: { id: number, name: string }) => [value];

const createArrWithGenerics = <T>(value: T) => [value];
// const createArrWithGenerics = (value:) => {
//     return [value];
// };

const arrString = createArrWithGenerics("Mango");
const arrNum = createArrWithGenerics(200);
const arrobj = createArrWithGenerics({
    id: 123,
    name: "Tomato"
});


// Tuple

const createArrWithTuple = (param1: string, param2: string) => [param1, param2];

const creteArrTupleWithGenerics = <X, Y>(param1: X, param2: Y) => [param1, param2];

const result1 = creteArrTupleWithGenerics(15, "Mst. P");
const result2 = creteArrTupleWithGenerics("Mango", true);
const result3 = creteArrTupleWithGenerics("Mr. R", "Mst. P");


const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo,
    }
};

const student1 = {
    id: 123,
    name: "Piash",
    hasPen: true
};

const student2 = {
    id: 456,
    name: "Mezba",
    hasCar: true,
    isMarried: "unknown"
}

const stu1 = addStudentToCourse(student1);
const stu2 = addStudentToCourse(student2);
console.log(stu1, stu2);
