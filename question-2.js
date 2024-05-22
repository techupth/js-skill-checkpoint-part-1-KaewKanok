// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

inventory[0].quantity = 200;

const newInventory = { name: "Orange", price: 20, quantity: 300 };
inventory.push(newInventory);

const totalPrice = `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${inventory.reduce(
  (acc, cur) => (acc += cur.price * cur.quantity),
  0
)} บาท`;

console.log(inventory);
console.log(totalPrice);
