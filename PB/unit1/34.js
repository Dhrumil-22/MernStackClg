// Create a JSON object named Home Expenses in which you have to 
// add monthly expenses of transport , food bill and  names of different 
// family members including mother,father,brother and sister.Print the 
// expenses of father with his name.

let homeExpenses = {
    transport: 2000,
    food: 5000,
    family: {
        father: {
            name: "Ramesh",
            expense: 3000
        },
        mother: {
            name: "Sita",
            expense: 2500
        },
        brother: {
            name: "Amit",
            expense: 1500
        },
        sister: {
            name: "Neha",
            expense: 1200
        }
    }
};

// Print father's name and expense
console.log("Father Name:", homeExpenses.family.father.name);
console.log("Father Expense:", homeExpenses.family.father.expense);