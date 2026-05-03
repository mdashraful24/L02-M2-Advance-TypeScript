// ! Constraint in typescript

// * constraint : strict rules deya


interface stuBasicInfo {
    id: number;
    name: string;
    phoneNo: string;
    dateOfBirth: string;
    bloodGroup: string;
}

const addStudentToInfoTable = <T extends stuBasicInfo>(studentInfo: T) => {
    return {
        table: "Student Info Collection",
        ...studentInfo
    }
};

const student1 = {
    id: 123,
    name: "Johir",
    hasPen: true
};

const student2 = {
    id: 123,
    name: "Johir",
    hasPaper: true
};

const student3 = {
    id: 678,
    name: "Jiku",
    phoneNo: "01855667788",
    dateOfBirth: "12-12-1212",
    bloodGroup: "O+",
    hasWatch: false
}

const stu1 = addStudentToInfoTable(student3);
console.log(stu1);
