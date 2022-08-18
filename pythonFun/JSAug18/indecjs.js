
// task1
let user = { Name: "John", Surname: "Smith" };
console.log(user);
user["Name"] = "pete";
console.log(user);
delete user.Name;
console.log(user);


// task2
function isEmpty(obj) {
let obj = [];
}
if (obj == 0) {
    console.log("True");
}
else {
    console.log("False");
}


// task3
function nameSalary(Name, Salary) {
    return { Name: Name, Salary: Salary };
}
let user1 = nameSalary("Surya", 10000);
let user2 = nameSalary("Bharath", 20000);
let user3 = nameSalary("Harish", 30000);
let user4 = user1.Salary + user2.Salary + user3.Salary;
console.log(user4);


//  Q1
let a1 = [1, 4, 5, 8, 9, 11]
let a2 = [2, 5, 6, 10, 12, 14]
const mergearrey = (a1, a2) => {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < a1.length && a2.length) {
        if (a1[i] < a2[j]) {
            res.push(a1[i])
            i++
        }
        else {
            res.push(a2[j])
            j++
        }
    };
    while (i < a1.length) {
        res.push(a1[i]);
        i++
    };
    while (j < a2.length) {
        res.push(a2[j]);
        j++

    };
    return res;

};
console.log(mergearrey(a1, a2))



// Q2
function factorial(n) {
    var res = 1, i;
    for (i = 2; i <= n; i++)
        res *= i;
    return res;
}
var n = 2;
console.log(factorial(n));



// Q3
function binarySearch(Array, target) {
    let start = 0;
    let end = Array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (Array[middle] === target) {
            return middle;
        } else if (Array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return "Not Found";
}

console.log(binarySearch([1, 3, 5, 6, 8, 9, 11, 14, 16], 11));