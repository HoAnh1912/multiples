// CODE JAVASCRIPT
// Nhập N và mở console.log để xem kết quả

function getVal(event) {
  if (event.keyCode != 13) {
    return;
  }
  var total_sum = 0;
  var number = "";
  var n = document.getElementById("number").value;
  if (0 < n <= 100000000) {
    for (i = 1; i < n; i++) {
      if (i > 100000) {
        return;
      }
      if (i % 3 == 0 || i % 5 == 0) {
        number += i + ", ";
        total_sum += i;
      }
    }
    console.log("Boi chung: ", number.substring(0, number.length - 2));
    console.log(total_sum);
  }
}

//CODE NODEJS
function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = BigInt(readLine());
    let result = 0;
    n = n - 1n;
    let a = n / 3n;
    let b = n / 5n;
    let c = n / 15n;
    result = ((a * (a + 1n)) / 2n) * 3n;
    result += ((b * (b + 1n)) / 2n) * 5n;
    result -= ((c * (c + 1n)) / 2n) * 15n;
    console.log(String(result).slice(0, result.length));
  }
}
