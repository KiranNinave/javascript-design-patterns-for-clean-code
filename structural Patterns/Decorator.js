//decorator pattern shows object level inheriance like a object modifier

class Car {
  constructor(name) {
    this.name = name;
  }
}

const car = new Car("FERARI");
console.log(car);

class SuperCar {
  constructor(car) {
    this.name = car.name + "is super car";
  }
}

const superCar = new SuperCar(car); //modifing car
console.log(superCar);

class RacingCar {
  constructor(car) {
    this.name = car.name + " and racing car";
  }
}

const racingCar = new RacingCar(superCar);
console.log(racingCar);
