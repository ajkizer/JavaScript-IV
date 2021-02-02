// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
  }

  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  adjustScore(student) {
    let coinFlip = Math.ceil(Math.random() * 2);
    if (coinFlip === 1) {
      student.grade -= Math.ceil(Math.random() * 25);
    } else {
      student.grade += Math.ceil(Math.random() * 25);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are ${this.favSubjects}`);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a pull request for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate(instructor) {
    console.log(
      `${instructor.name} will be conducting an assessment on ${this.name}`
    );
    instructor.adjustScore(this);
    console.log(`${this.name} received a ${this.grade}`);

    while (this.grade <= 70) {
      this.grade = 60;
      console.log("It's ok, better luck next time!");
      instructor.adjustScore(this);
      console.log(`${this.name} received a ${this.grade}`);
    }
    console.log(`${this.name} has graduated!`);
  }
}

const instructor1 = new Instructor({
  age: 65,
  name: "Arnold Schwartzeneggar",
  location: "Cal-ee-fownya",
  speciality: "Lifting",
  favLanguage: "German",
  catchPhrase: "I'll be back"
});

const instructor2 = new Instructor({
  age: 36,
  name: "Bob Builder",
  location: "Indianapolis",
  speciality: "Building",
  favLanguage: "Python",
  catchPhrase: "I can fix it!"
});

const pmOne = new ProjectManager({
  age: 45,
  name: "Dave Chappelle",
  location: "L.A.",
  speciality: "Hacking NASA with HTML",
  favLanguage: "HTML",
  catchPhrase: "I'm Rick James",
  gradClassName: "WEB35",
  favInstructor: instructor2
});

const pmTwo = new ProjectManager({
  age: 35,
  name: "Rob Schneider",
  location: "L.A.",
  speciality: "Being a carrot",
  favLanguage: "Rust",
  catchPhrase: "Das cray cray",
  gradClassName: "WEB35",
  favInstructor: instructor1
});

const studentOne = new Student({
  age: 25,
  name: "Randy",
  location: "Wyoming",
  previousBackground: "Electrician",
  className: "Web35",
  favSubjects: ["React", "Javascript", "Python"],
  grade: 88
});

const studentTwo = new Student({
  age: 23,
  name: "Mandy",
  location: "Utah",
  previousBackground: "CNA",
  className: "Web35",
  favSubjects: ["React", "LESS", "Python"],
  grade: 65
});

instructor2.demo("React");
instructor1.grade(studentTwo, "Javascript-III");
instructor1.speak();

pmOne.speak();
pmOne.standUp("#Chappellonians");
pmTwo.debugsCode(studentOne, "Node.js");

studentOne.speak();
studentOne.listsSubjects();
studentTwo.sprintChallenge("Node.js");
studentTwo.PRAssignment("CSS");

studentOne.graduate(instructor2);
