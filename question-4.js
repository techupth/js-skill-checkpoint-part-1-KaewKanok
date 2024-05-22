// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function findMinQuantity(inventory) {
  let minQuantity = inventory[0];
  for (item of inventory) {
    if (item.quantity < minQuantity.quantity) {
      minQuantity = item;
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity.name} ซึ่งมี ${minQuantity.quantity} ชิ้น`;
}

console.log(findMinQuantity(inventory));
