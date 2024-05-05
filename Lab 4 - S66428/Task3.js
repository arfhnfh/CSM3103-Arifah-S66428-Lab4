// Arifah -S66428

// Create a JavaScript object representing a product ..
let product = {
    productName: "Scarf",
    quantity: 10,
    price: 10
};

// Access and display all properties of the product..
console.log("Product Name:", product.productName);
console.log("Quantity:", product.quantity);
console.log("Price:", product.price);

// create object and property for book ..
let book = {
    bookName: "Object Oriented Programming",
    authorName: "Kate Hermsworth"
};

// write the protoype for price ..
Object.setPrototypeOf(book, { price: 80 });

// The display about properties of book ..
console.log("Book Name:", book.bookName);
console.log("Author Name:", book.authorName);
console.log("Price:", book.price);

// create parent object for employee..
let employee = {
    employeeName: "Arifah Hanafiah",
    employeeId: "S66428",
    salary: 7500
};

// create the child object manager...
let Manager = Object.create(employee);
Manager.managerName = "Jennie Kim";
Manager.branch = "YG branch";

//display all properties ...
console.log("Employee Name:", Manager.employeeName);
console.log("Employee ID:", Manager.employeeId);
console.log("Salary:", Manager.salary);
console.log("Manager Name:", Manager.managerName);
console.log("Branch:", Manager.branch);
