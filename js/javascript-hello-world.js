function getName(){
  const userName = promptt('What is your name?')
  sayHello(userName);
}
function sayHello(name) {
  alert('Hello ' + name + '!');
  console.log('Alert was sent!')
}
    
    
function getAdmissionPrices() {
  let age = document.getElementById("age")
  let ticketPrice
  if (age > 12 && age < 65) {
    ticketPrice = 20;
  } else {
    ticketPrice = 10;
  }
  return ticketPrice;
}