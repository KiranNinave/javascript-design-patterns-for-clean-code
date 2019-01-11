//flyweight patter is ideal form memory consumption
//it will reduce memory consumsion by sharing common data between objects

//now using flyweight
class Flyweight {
  constructor(user, completed) {
    //flyweight takes the common paramenters between the objects and share them
    this.user = user;
    this.completed = completed;
  }
}

const flyweightFactory = (function() {
  const flyweights = {};
  let c = 0;
  const get = function(user, completed) {
    if (!flyweights[user + completed]) {
      flyweights[user + completed] = new Flyweight(user, completed);
    }
    return flyweights[user + completed];
  };
  const count = function() {
    for (i in flyweights) c++;
    return c;
  };
  return {
    get: get,
    count: count
  };
})();

class Cource {
  constructor(data) {
    this.name = data.name;
    this.flyweight = flyweightFactory.get(data.user, data.completed);
    // this.user = data.user;
    // this.completed = data.completed;
  }
}

const users = ["a", "b", "c", "d"]; //array of reapeatative users
const completeStatus = [true, false]; //cource coplition status

const courceMethods = (function() {
  const cources = {};

  const add = function(cource) {
    cources[cource.title] = new Cource(cource);
  };
  const get = function(title) {
    return cources[title];
  };
  return {
    add: add,
    get: get
  };
})();

//checking memory before creating the objects
const initialMemory = process.memoryUsage().heapUsed;
console.log("initial memory", initialMemory);

for (let i = 0; i < 1000000; i++) {
  courceMethods.add({
    name: i + ". cource",
    user: users[Math.round(Math.random() * 4)],
    completed: completeStatus[Math.round(Math.random() * 2)]
  });
}

//cheking memory after creating the objects
const finalMemory = process.memoryUsage().heapUsed;
console.log("final memory", finalMemory);
//total memory used
console.log(
  `total memory used with flyweight ${(
    (finalMemory - initialMemory) /
    1000000
  ).toFixed(2)} MB`
);

console.log("flyweight counts", flyweightFactory.count());
