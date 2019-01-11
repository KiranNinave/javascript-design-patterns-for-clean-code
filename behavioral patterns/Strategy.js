//the strategy pattern change strategy dynamicaly the strategy will present else where
class PaymentMethods {
  static Card(user) {
    console.log(`${user} will pay with card`);
  }
  static Cash(user) {
    console.log(`${user} will pay with cash`);
  }
}

class Payment {
  constructor(paymentStrategy = "Card") {
    this.paymentStrategy = PaymentMethods[paymentStrategy];
  }
  changeStrategy(strategy) {
    this.paymentStrategy = PaymentMethods[strategy];
  }
  currentStrategy(user) {
    this.paymentStrategy(user);
  }
}

const payment = new Payment();
payment.currentStrategy("kiran");
payment.changeStrategy("Cash");
payment.currentStrategy("kiran");
