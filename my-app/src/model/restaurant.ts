// let data = {
//     name: "",
//     category: "western",
//     address: {
//         city: "",
//         detail: "",
//         zipCode: 23423,
//     },
//     menu: [{ name: "rose pasta", price: 2000, category: "PASTA" }],
// };

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
};

export type Address = {
    city: string;
    detail: string;
    zipCode: Number;
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};

export type AddressWithoutZip = Omit<Address,'zipCode'>;
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>;

export type ApiResponse<T>={
    data:T[],
    totalPage:number,
    page:number
}