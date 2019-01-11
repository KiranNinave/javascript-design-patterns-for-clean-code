//it ideal for creating hierarchies or tree structure
//classes hierarchies with primitive and objects
//any level of complexity
class Cource {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  total() {
    return this.price;
  }
  print() {
    console.log(`${this.name} - ${this.total()}`);
  }
}

const Java = new Cource("Java", 100);
const Python = new Cource("Python", 200);
const Php = new Cource("Php", 300);

//createing composite class to group cources
class CourceGroup {
  constructor(groupName, courceGroup) {
    this.name = groupName;
    this.courceGroup = courceGroup;
  }
  total() {
    var sum = 0;
    this.courceGroup.map(cource => {
      sum = sum + cource.total();
    });
    return sum;
  }
  print() {
    console.log(`${this.name} - ${this.total()}`);
  }
}

const courceGroup = new CourceGroup("Programming", [Java, Python, Php]);
courceGroup.print();
