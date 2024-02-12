var encryption = '';
var key = 'key';
var name = 'name';
var num1 = 0;
var num2 = 0;
var symbols = ['(~key)', '(name.length*key)', '(key/name.length)', '(key^name.length)', '~name.length'];
var maths = ['+', '*', '-']
var chances = 6;

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

encrypt();

function validate() {
 if (document.getElementById('validation').value == encryption) {
  document.getElementById('validation').value = '';
  chances = chances - 1;
  document.getElementById('refresh').innerHTML = chances + ' &#xE72E;';
 }
 else alert("invalid key");
}

function encrypt() {
  for (i=0; i<2; i++) {
    encryption += symbols.random();
    encryption += maths.random();
  }
  encryption += Math.floor(Math.random() * (1 - 20) + 20)
  encryption += ' == sum(name[2] + key.lenth)';
  document.getElementById('reveal').innerHTML = encryption;
}