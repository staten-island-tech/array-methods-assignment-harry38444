const date = new Date();
let year = date.getFullYear();
const Harry = {
    firstName: "Harry",
    lastName:"Li",
    grauated: false,
    intelligent: true,
    smelly: false,
    DOB: 2007,
    spouse: null,
    siblings: ["JJ", "JH"],
    age: function(){
 return year - this.DOB;
    },

}

const rick = {
    firstName: "rick",
    lastName:"Li",
    grauated: false,
    intelligent: false,
    smelly: true,
    DOB: 2008,
    spouse: null,
    siblings: ["b", "ba"],
    age: function(){
 return year - this.DOB;
    },

}

const ty = {
    firstName: "b",
    lastName:"yap",
    grauated: false,
    intelligent: false,
    smelly: true,
    DOB: 2007,
    spouse: null,
    siblings: ["ha", "h"],
    age: function(){
 return year - this.DOB;
    },

}

students.forEach((student)=> console.log(student.firstName));
const current = students.filter((student)=> student.graduated === false);
console.log(graduates);