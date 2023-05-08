function tinhDiem() {
  var diemChuan = parseFloat(document.getElementById("diem-chuan").value);
  var diemMon1 = parseFloat(document.getElementById("diem-mon-1").value);
  var diemMon2 = parseFloat(document.getElementById("diem-mon-2").value);
  var diemMon3 = parseFloat(document.getElementById("diem-mon-3").value);
  var khuVuc = document.getElementById("khu-vuc").value;
  var doiTuong = document.getElementById("doi-tuong").value;

  var diemUuTien = 0;

  switch (khuVuc) {
    case "A":
      diemUuTien += 2;
      break;
    case "B":
      diemUuTien += 1;
      break;
    case "C":
      diemUuTien += 0.5;
      break;
    case "X":
      break;
    default:
      
  }

  switch (doiTuong) {
    case "1":
      diemUuTien += 2.5;
      break;
    case "2":
      diemUuTien += 1.5;
      break;
    case "3":
      diemUuTien += 1;
      break;
    case "0":
      break;
    default:
      
  }

  var tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    document.getElementById("ket-qua").innerHTML = "Rớt";
  } else if (tongDiem >= diemChuan) {
    document.getElementById("ket-qua").innerHTML =
      "Đậu. Tổng điểm đạt được: " + tongDiem + " điểm";
  } else {
    document.getElementById("ket-qua").innerHTML = "Rớt";
  }
}
