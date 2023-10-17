const students = [{
    firstName: "Harry",
    lastName:"Li",
    graduating: true,
    intelligent: true,
    DOB: 2007,
    siblings: ["JJ", "JH"],
},{
firstName: "rick",
    lastName:"Li",
    graduating: true,
    intelligent: true,
    DOB: 2008,
    siblings: ["rat", "ratty"],
},{
    
    firstName: "ty",
    lastName:"yap",
    graduating: false,
    intelligent: false,
    DOB: 2008,
    siblings: false,
}
]
const graduating = students.filter((student)=> student.graduating === true)
console.log("students graduating")
graduating.forEach((student)=> console.log(student.firstName))

const has_siblings = students.filter((student)=> student.siblings !== false)
console.log("students that have siblings")
has_siblings.forEach((student)=> console.log(student.firstName))

console.log("the siblings")
const siblings = students.forEach((student)=> student.siblings.forEach((siblings) =>console.log(siblings)))
students.forEach((student)=> console.log(student.firstName))