function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  console.log(quantity);
  console.log(discount);
  console.log(serviceCharge);
  console.log(tax);

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

console.log(processOrder(100, 10));

// If 0 is passed in as an argument, our program will not assign the variable to that value,
// since 0 is a false value