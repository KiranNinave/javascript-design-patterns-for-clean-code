//Facade pattern seprate complex login from main file its just a wrapper arround complex logic

class Cource {
  constructor(data) {
    this.name = data.name;
    this.completed = data.completed || false;
  }
}

const courceServices = (function() {
  const courceCompleted = function(cource) {
    cource.completed = true;
  };
  const save = function(cource) {
    console.log(`saving cource ${cource}`);
  };
  return {
    completed: courceCompleted,
    save: save
  };
})();

//now in main application file we right logic
const cource = new Cource({ name: "Java" }); //cource completion is false

//making cource completion to true using services
courceServices.completed(cource);
//saving cource
if (cource.completed) {
  courceServices.save(cource);
}
//so the above if logic should not be in main file

const cource2 = new Cource({ name: "python" });
const courceServicesFacade = (function() {
  const completed = function(cource) {
    courceServices.completed(cource); //this complex logic perfomr in wrapper so it hides logic from main file
    if (cource2.completed) {
      courceServices.save(cource);
    }
  };
  return {
    complete: completed
  };
})();

//now in main file we need to just call to wrapper
courceServicesFacade.complete(cource2);
