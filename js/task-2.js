const invoice = 100;
const stock = 100;

// Write code under this line
let message = "";

//console.log(message);

//если invoice равен 100
if (invoice === 100) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  if (invoice === 50) {
    message = "Заказ оформлен, с вами свяжется менеджер";
  } else {
    message = "На складе недостаточно товаров!";
  }
}
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
