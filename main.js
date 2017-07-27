// console.log('js file is connected!');
// console.log(2 + 2);
// var studentNames = ['Fred', 'Susie', 'Roberto'];

// var test = $('#pink-heading');
// test.text('I H8 TENN1S');

function myGreeting() {
  console.log('button was clicked');
  var userName = $('#username').val();
  console.log(userName);
  var userAge = $('#userage').val();
  console.log(userAge);
  $('h1').text('Welcome, ' + userName);
}

function setup() {
  console.log('page is ready');
  $('#submitButton').click(myGreeting);
}

$(document).ready(setup);




function checkout (item1, item2, coupon) {
  var subtotal = item1 + item2;
  var couponValue = subtotal * coupon;
  var grandTotal = subtotal - couponValue;
  // console.log(grandTotal);
  return grandTotal;
}


// console.log(checkout(-50, 30));













// function helloFunction(name) {
//   if(name === 'Sammy') {
//     console.log('Go away. I h8 you.')
//   } else {
//     console.log('Hello ' + name + '!');
//   }
// }
//
// helloFunction('sammy');
//
// console.log(checkout(33, 19, .15));
//
// var oneItemResult = checkout(12, 0, 0);
//
// console.log(oneItemResult);
//
// checkout(500, 1000, .05);
//
// var bananaPrice = 1.5;
// var chocolatePudding = 6;
// chocolatePudding = 7;
// var superCoupon = .45;
//
// var bankAccount = 100; // :(
//
// var remainAmount = bankAccount - checkout(bananaPrice, chocolatePudding, superCoupon);
//
// console.log('I have this left in my bank account: ' + remainAmount + '.');
