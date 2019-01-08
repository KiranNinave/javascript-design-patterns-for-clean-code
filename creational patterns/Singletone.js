//single tone requires imediatly invoke function

const Singletone = (function() {
  let instance;
  const createInstance = function() {
    if (!instance) {
      instance = new Object("i am object");
    }
    return instance;
  };
  return {
    getInstance: createInstance
  };
})();

const object = Singletone.getInstance();
console.log(object);
