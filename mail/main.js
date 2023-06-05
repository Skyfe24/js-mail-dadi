console.log("JS OK");
const emails = ['geronimo.stilton@gmail.com','capitan.mutanda@gmail.com'];

let userEmail = prompt('Qual è la tua email?' , 'Ilbattelloavapore@gmail.com');
console.log(userEmail);



for (let i=0; i < emails.length; i++) {
  if (userEmail === emails[0]) {
  console.log('benvenuto');
} else if
  (userEmail === emails[1]) {
  console.log('benvenuto');
} else
  console.log('non puoi entrare, mi spiace');
}
