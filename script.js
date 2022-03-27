// Get the modal
var modal = document.getElementsByClassName("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
for (let i in btn) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
for (let i in span) {
  span[i].onclick = function () {
    modal[i].style.display = "none";
  };
}

//hitung predikat ip
let hitungIpHuruf = function (jml_ip) {
  var ip_huruf = [];
  let predikat = "undefined";

  for (let x in jml_ip) {
    switch (jml_ip[x]) {
      case 4:
        predikat = "A";
        break;
      case 3:
        predikat = "B";
        break;
      case 2:
        predikat = "C";
        break;
      case 1:
        predikat = "D";
        break;
      case 0:
        predikat = "E";
        break;
      default:
        predikat = "undefined";
        break;
    }
    ip_huruf.push(predikat);
  }
  return ip_huruf;
};

//menampilkan isi array
var list_isi = function (isi) {
  let txt = "";

  for (let i in isi) {
    txt += isi[i] + "<br/>";
  }
  return txt;
};

function list_no(matkul) {
  var txt = "";

  for (i = 1; i <= matkul.length; i++) {
    txt += i + "<br/>";
  }
  return txt;
}

function hitungJumlah(x) {
  let jml = 0;

  for (let i in x) {
    jml += x[i];
  }
  return jml;
}

function hitungIP(sks_mk, nilai_mk, total_sks) {
  let jml = 0;

  for (let i in sks_mk) {
    let x = sks_mk[i] * nilai_mk[i];
    jml += x;
  }
  return (jml / total_sks).toPrecision(3);
}

//input nama matkul, sks, ip semester 1
let matkul = ["Pendidikan Agama", "Bahasa Indonesia", "Bahasa Inggris", "Sistem Digital", "Konsep Pemrograman"];
let jml_sks = [2, 2, 2, 3, 4];
let jml_ip = [4, 3, 3, 4, 3];

var no_matkul = document.getElementById("no-matkul");
var td_matkul = document.getElementById("nama-matkul");
var td_sks = document.getElementById("sks-matkul");
var td_ip = document.getElementById("ip-matkul");
var td_predikat = document.getElementById("predikat-matkul");

no_matkul.innerHTML = list_no(matkul);
td_matkul.innerHTML = list_isi(matkul);
td_sks.innerHTML = list_isi(jml_sks);
td_ip.innerHTML = list_isi(jml_ip);
td_predikat.innerHTML = list_isi(hitungIpHuruf(jml_ip));

var td_sks_semester = document.getElementById("td-sks-semester");
td_sks_semester.innerHTML = hitungJumlah(jml_sks);

var sks_total = [];
sks_total.push(hitungJumlah(jml_sks));
var td_sks_kumulatif = document.getElementById("td-sks-kumulatif");
td_sks_kumulatif.innerHTML = hitungJumlah(sks_total);

var td_ip_semester = document.getElementById("td-ip-semester");
td_ip_semester.innerHTML = hitungIP(jml_sks, jml_ip, hitungJumlah(jml_sks));

var ip_total = [];
ip_total.push(hitungIP(jml_sks, jml_ip, hitungJumlah(jml_sks)) * hitungJumlah(jml_sks));
var td_ip_kumulatif = document.getElementById("td-ip-kumulatif");
td_ip_kumulatif.innerHTML = (hitungJumlah(ip_total) / hitungJumlah(sks_total)).toPrecision(3);

//input nama matkul, sks, ip semester 2
let matkul2 = ["Pendidikan Kewarganegaraan", "Bahasa Inggris II", "Kalkulus II", "Matematika Diskrit", "Aljabar Linear"];
let jml_sks2 = [2, 2, 3, 3, 3];
let jml_ip2 = [3, 4, 4, 4, 4];

var no_matkul2 = document.getElementById("no-matkul2");
var td_matkul2 = document.getElementById("nama-matkul2");
var td_sks2 = document.getElementById("sks-matkul2");
var td_ip2 = document.getElementById("ip-matkul2");
var td_predikat2 = document.getElementById("predikat-matkul2");

no_matkul2.innerHTML = list_no(matkul2);
td_matkul2.innerHTML = list_isi(matkul2);
td_sks2.innerHTML = list_isi(jml_sks2);
td_ip2.innerHTML = list_isi(jml_ip2);
td_predikat2.innerHTML = list_isi(hitungIpHuruf(jml_ip2));

var td_sks_semester2 = document.getElementById("td-sks-semester2");
td_sks_semester2.innerHTML = hitungJumlah(jml_sks2);

sks_total.push(hitungJumlah(jml_sks2));
var td_sks_kumulatif2 = document.getElementById("td-sks-kumulatif2");
td_sks_kumulatif2.innerHTML = hitungJumlah(sks_total);

var td_ip_semester2 = document.getElementById("td-ip-semester2");
td_ip_semester2.innerHTML = hitungIP(jml_sks2, jml_ip2, hitungJumlah(jml_sks2));

ip_total.push(hitungIP(jml_sks2, jml_ip2, hitungJumlah(jml_sks2)) * hitungJumlah(jml_sks2));
var td_ip_kumulatif2 = document.getElementById("td-ip-kumulatif2");
td_ip_kumulatif2.innerHTML = (hitungJumlah(ip_total) / hitungJumlah(sks_total)).toPrecision(3);
