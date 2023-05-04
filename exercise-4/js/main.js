/**
 * input:
 * + nhapLoaiKhachhang
 * + maKhachHang
 * + kenhCaoCap
 * + soketNoi
 * + 2 mưc giá tiền cáp:  ...
 * progress:
 * + dom đến các thẻ input
 * +
 * ouput
 * + tính tiền cap
 * + lưu ý: doanh nghiệp thì hiện lên số kết nối , người dân thì ẩn đi số kết nối
 *
 */

document.getElementById("btnTinhTienCap").onclick = function () {

  var loaiKhachHang = document.getElementById("loaiKhachHang");
  var maKhachHang = document.getElementById("maKhachHang").value;
  var kenhCaoCap = document.getElementById("kenhCaoCap").value;
  var soKetNoi = document.getElementById("soKetNoi");
  var divSoKetNoi = document.getElementById("divSoKetNoi");

  var tongTien = 0;

  if (loaiKhachHang.value === "nhaDan") {
    // Tính hóa đơn cho khách hàng nhà dân
    tongTien = 4.5 + 20.5 + 7.5 * kenhCaoCap;
    divSoKetNoi.style.display = "none";
    soKetNoi.value = "";
  } else if (loaiKhachHang.value === "doanhNghiep") {
    // Tính hóa đơn cho khách hàng doanh nghiệp
    var tongKetNoi = 10 + Number(soKetNoi.value);
    tongTien = 15 + 75 + 5 * Number(tongKetNoi) + 50 * kenhCaoCap;
    divSoKetNoi.style.display = "block";
  }

  document.getElementById('ketQua').innerHTML =
  'Mã khách hàng:' + maKhachHang+ ';Tiền cáp: '+ tongTien.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

// Sử dụng sự kiện onchange của dropdown để xử lý ẩn hiện cho ô nhập số kết nối
document.getElementById("loaiKhachHang").onchange = function () {
  var divSoKetNoi = document.getElementById("divSoKetNoi");
  var soKetNoi = document.getElementById("soKetNoi");

  if (this.value === "doanhNghiep") {
    divSoKetNoi.style.display = "block";
  } else {
    divSoKetNoi.style.display = "none";
    soKetNoi.value = "";
  }
};
