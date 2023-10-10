const students = [{
    firstName: "Harry",
    lastName:"Li",
    graduating: true,
    intelligent: true,
    smelly: false,
    DOB: 2007,
    spouse: null,
    siblings: ["JJ", "JH"],
    },{
firstName: "rick",
    lastName:"Li",
    graduating: false,
    intelligent: false,
    smelly: true,
    DOB: 2008,
    spouse: null,
    siblings: ["I", "ba"],

    },{
    
    firstName: "ty",
    lastName:"yap",
    graduating: false,
    intelligent: false,
    smelly: true,
    DOB: 2008,
    spouse: null,
    siblings: ["t", "tt"],
    },{
}
]

    


students.forEach((student)=> console.log(student.firstName));
const current = students.filter((student)=> student.graduating === true)
console.log(graduating)