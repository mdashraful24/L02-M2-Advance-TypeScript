// ! Generics with interface


interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        name: string;
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface BrandWatch {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
    camera: boolean;
}

interface Bike {
    name: string;
    brand: string;
    model: string;
}

const poorDevelopers: Developer<BrandCharaWatch> = {
    name: "Mr. X",
    salary: 15000,
    device: {
        name: "Laptop",
        brand: "DCL",
        model: "dcl019304950",
        releasedYear: "Jun 2023"
    },
    smartWatch: {
        heartRate: "100",
        stopWatch: true
    }
};

const richDevelopers: Developer<BrandWatch, Bike> = {
    name: "Mr. X",
    salary: 40000,
    device: {
        name: "Laptop",
        brand: "HP",
        model: "X34",
        releasedYear: "Jun 2026"
    },
    smartWatch: {
        heartRate: "100",
        stopWatch: true,
        callSupport: true,
        camera: true
    },
    bike: {
        name: "Hero",
        brand: "Honda",
        model: "Honda 2025"
    }
};
