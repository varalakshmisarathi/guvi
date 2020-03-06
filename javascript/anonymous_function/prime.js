//return all prime numbers using IIFE function
var a = [3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
for (var i = 0; i < a.length; i++) {
if (a[i] == 2) {
console.log(2);
}
for (var k = 2; k < a[i]; k++) {
if (k == a[i] - 1) {
console.log(a[i]);
} else if (a[i] % k == 0) {
break;
}
}
}
})();
//return all prime numbers using anonymous function
var ano = function(arro) {
for (var i = 0; i < a.length; i++) {
if (a[i] == 2) {
console.log(2);
}
for (var k = 2; k < a[i]; k++) {
if (k == a[i] - 1) {
console.log(a[i]);
} else if (a[i] % k == 0) {
break;
}
}
}
}
ano(a);
