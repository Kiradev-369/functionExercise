const PRICE_50KW_FIRST  = 500;
const PRICE_50KW_NEXT  = 650;
const PRICE_100KW_NEXT  = 850;
const PRICE_150KW_NEXT  = 1100;
const PRICE_REMAIN  = 1300;

function main() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value;

  var total = 0;
  if (soKw > 0 && soKw <= 50) {
    total = soKw * PRICE_50KW_FIRST ;
  } else if (soKw > 50 && soKw <= 100) {
    total = 50 * PRICE_50KW_FIRST  + (soKw - 50) * PRICE_50KW_NEXT ;
  } else if (soKw > 100 && soKw <= 200) {
    total = 50 * PRICE_50KW_FIRST  + 50 * PRICE_50KW_NEXT  + (soKw - 100) * PRICE_100KW_NEXT ;
  } else if (soKw > 200 && soKw <= 350) {
    total =
      50 * PRICE_50KW_FIRST  +
      50 * PRICE_50KW_NEXT  +
      100 * PRICE_100KW_NEXT  +
      (soKw - 200) * PRICE_150KW_NEXT ;
  } else if (soKw > 350) {
    total =
      50 * PRICE_50KW_FIRST  +
      50 * PRICE_50KW_NEXT  +
      100 * PRICE_100KW_NEXT  +
      150 * PRICE_150KW_NEXT  +
      (soKw - 350) * PRICE_REMAIN ;
  }

  document.getElementById('ketQua').innerHTML = 'Họ tên: ' + hoTen + '  & Tiền điện: ' + total.toLocaleString() + ' VND';
}

