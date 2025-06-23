const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: removed equal sign
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
      console.log(`Item ${cartItems[i].name} was added. Total: ${total}`); // console.logged for verificaiton
  }
  return total;
}

function applyDiscount(total, discountRate) {
    if ( discountRate < 0 || discountRate > 1) {
      console.error("Invalid discount rate.")
    }
  return total - total * discountRate; 
}

function generateReceipt(cartItems, total) {
  if (total === isNaN) {
    console.error("Items must be a number");
    return "Error.";
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;


// Edge case
console.log("Empty cart", calculateTotal([]));
console.log("Receipt", generateReceipt([], 0));
const oneItem = [{name: "Phone", price: 100}];
const oneTotal = calculateTotal( oneItem);
const oneDiscount = applyDiscount(oneTotal, 0.3);
console.log("One item:", generateReceipt(oneItem, oneDiscount));
console.log("No Discount", applyDiscount(100,0));
console.log("Full Discount", applyDiscount(100,1));