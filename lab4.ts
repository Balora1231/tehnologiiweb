interface User {
    name: string;
    age: number;
    email: string;
    isVerified: boolean;
    address: {
        street: string;
        city: string;
        country: string;
        zipCode: string;
    };
}
const user: User = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isVerified: true,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
        zipCode: "12345"
    }
};
console.log(user.name); // "John Doe"
console.log(user.age); // 30
console.log(user.email); // "john.doe@example.com"
console.log(user.isVerified); // true
console.log(user.address.street); // "123 Main St"
console.log(user.address.city); // "Anytown"
console.log(user.address.country); // "USA"
console.log(user.address.zipCode); // "12345"
