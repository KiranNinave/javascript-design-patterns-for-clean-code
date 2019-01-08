class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, cls) {
    super(name);
    this.cls = cls;
  }
}

class Teacher extends Person {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
}

const personFactory = function() {
  createPerson = function(type, name, data) {
    if (type === "student") {
      return new Student(name, data);
    } else if (type === "teacher") {
      return new Teacher(name, data);
    }
  };
  return {
    createPerson
  };
};

const student = personFactory().createPerson("student", "kiran", "it");
console.log(student);
