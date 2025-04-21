"use strict";

var sms1 = [85, 90, 89, 83, 88, 80, 85, 78, 91, 80, 87, 88];
var sms2 = [87, 90, 89, 86, 90, 83, 85, 85, 90, 85, 90, 97];
var sms3 = [83, 90, 84, 93, 88, 80, 87, 88, 86, 93, 88];

function raport(sms) {
  var total = 0;

  for (var i = 0; i < sms.length; i++) {
    total += sms[i];
  }

  return total / sms.length;
}

console.log(raport(sms2));
console.log(sms3.length);
console.log(sms1.length);