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
    graduating: false,
    intelligent: false,
    DOB: 2008,
    siblings: ["rat", "ratty"],

    },{
    
    firstName: "ty",
    lastName:"yap",
    graduating: false,
    intelligent: false,
    DOB: 2008,
    siblings: ["tapper", "yapper"],
    },{
}
]


students.forEach((student)=> console.log(student.siblings))
students.forEach((student)=> console.log(student.firstName))
const graduating = students.filter((student)=> student.graduating === true)
console.log(graduating)
const siblings = students.filter((student)=> student.graduating !== false)
console.log(graduating)