const TAX_60 = 0.05;
const TAX_60_120 = 0.1;
const TAX_120_210 = 0.15;
const TAX_210_384 = 0.2;
const TAX_384_624 = 0.25;
const TAX_624_920 = 0.3;
const TAX_RESTANT = 0.35;

document.getElementById("btnTinhTienThue").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhapNam = Number(document.getElementById("thuNhapNam").value);
  var nguoiPhuThuoc = Number(document.getElementById("nguoiPhuThuoc").value);

  var thuNhapChiuThue = thuNhapNam - 4000000 - nguoiPhuThuoc * 1600000;

  var tienThue = 0;

  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
    tienThue = thuNhapChiuThue * TAX_60;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tienThue = thuNhapChiuThue * TAX_60_120;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tienThue = thuNhapChiuThue * TAX_120_210;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tienThue = thuNhapChiuThue * TAX_210_384;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tienThue = thuNhapChiuThue * TAX_384_624;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    tienThue = thuNhapChiuThue * TAX_624_920;
  } else if (thuNhapChiuThue > 960000000) {
    tienThue = thuNhapChiuThue * TAX_RESTANT;
  } else {
    alert("Số không hợp lệ !");
  }
  document.getElementById("ketQua").innerHTML =
    " Họ tên: " +
    hoTen +
    "; Tiền thuế thu nhập cá nhân: " +
    tienThue.toLocaleString() +
    " VND";
};
