// ! Explore Utility types


// * major utility types

interface Product {
    id: string;
    name: string;
    price: string;
    stock: string;
    color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithOutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
    id: "123",
    name: "Code",
    price: "1000",
    stock: "5",
    color: "White"
};

type OptionalProduct = Partial<Product>;

type ProductReadOnly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
    id: "123",
    name: "Code",
    price: "1000"
}
