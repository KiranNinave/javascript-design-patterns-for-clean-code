//observer pattern will file certain event when perticular action occurs

const Observer = (function() {
  let events = [];
  const subsribe = function(fn) {
    events.push(fn);
  };
  const unsubscribe = function(fn) {
    events = events.filter(item => {
      if (item != fn) {
        return item;
      }
    });
  };
  const fire = function() {
    events.map(fn => fn.call());
  };
  return {
    subscribe: subsribe,
    unsubscribe: unsubscribe,
    fire: fire
  };
})();

//creating events
const hello = function() {
  console.log("hello");
};

Observer.subscribe(hello);
Observer.fire();
Observer.unsubscribe(hello);
Observer.fire();
