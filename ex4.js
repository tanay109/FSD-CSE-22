const stu = {
    name: "Prateek",
    age: 32,
    branch: "CSE",
}
//const name = stu.name;
//const age = stu.age;
//const branch = stu.branch;
const { name:newname, age, branch } = stu;
console.log("Name=", newname)
console.log("Age", age)
console.log("Branch",branch)