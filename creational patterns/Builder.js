//builder patter simplefies the creation of complex object

class Cource {
  constructor(name, isPaid, price, isRateted, time) {
    this.name = name;
    this.isPaid = isPaid;
    this.price = price;
    this.isRateted = isRateted;
    this.time = time;
  }
}

const cource1 = new Cource(
  "java",
  true,
  5000,
  false,
  new Date().toLocaleString()
); //it creates the object but nothing is clear
console.log(cource1);

class Cource2 {
  constructor(builder) {
    this.name = builder.name;
    this.isPaid = builder.isPaid;
    this.price = builder.price;
    this.isRateted = builder.isRateted;
    this.time = builder.time;
  }
}

class courceBuilder {
  constructor(
    name,
    isPaid = false,
    price = 0,
    isRateted = false,
    time = new Date().toLocaleString()
  ) {
    //the constructor should always have some default parameters
    this.name = name;
    this.isRateted = isRateted;
    this.time = time;
    this.isPaid = isPaid;
  }
  setPrice(price) {
    this.price = price;
    this.isPaid = true;
    return this;
  }
  setRateted(isRateted) {
    this.isRateted = isRateted;
    return this;
  }
  setTime(time) {
    this.time = time;
    return this;
  }
  build() {
    return new Cource2(this);
  }
}

const cource2 = new courceBuilder().setRateted(true).build();
//can use randome combinations also but build is compolsory in order to build the object
const cource3 = new courceBuilder("kiran")
  .setTime(new Date().toDateString())
  .setPrice(500)
  .setRateted(true)
  .build();
console.log(cource2);
console.log(cource3);
