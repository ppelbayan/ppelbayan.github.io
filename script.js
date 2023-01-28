// Kami meggunakan API Kalender islam dari "http://api.aladhan.com/v1/gToH"

var tanggal = new Date().getDate()+2;
var bulan = new Date().getMonth();
var tahun = new Date().getFullYear();
$.ajax({
  url: "https://api.aladhan.com/v1/gToH",
  type: "get",
  dataType: "json",
  data: {
    'date' : `${tanggal}-${bulan}-${tahun}`,
  },
  success: function (result){
    let a = result.data.hijri.month.number;
    let dataBulan = a.toLocaleString('de');
    var wulan = ['Muharom','Sofar','Robiul Awal','Robiul Akhir','Jumadil Awal','Jumadil Akhir','Rojab','Sya&#39;ban','Ramadhan','Syawal','Dzulqo&#39;dah','Dzulhijah']
        wulTam = wulan[dataBulan]
    console.log(wulTam);

    let b = result.data.hijri.day;
    let dataHari = b.toLocaleString('de');
    
    let c = result.data.hijri.year;
    let dataTahun = c.toLocaleString('de');
    
    $('#tanggalwaktu').html(`
    <p>`+thisDay+`, `+dataHari+` `+wulTam+` `+dataTahun+` H</p>
    `)
  }
});



var myDays = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var date = new Date();
var day = date.getDate();
var thisDay = date.getDay(),
    thisDay = myDays[thisDay];
// function validateDaftar() {
//     let a = document.forms["psbOnline"]["inputNama"].value;
//     if (a.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "Nama Lengkap tidak boleh kosong!",
//       });
//       return false;
//     }
    
//     let b = document.forms["psbOnline"]["inputNomorNik"].value;
//     if (b.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let c = document.forms["psbOnline"]["inputTempatLahir"].value;
//     if (c.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let d = document.forms["psbOnline"]["inputTanggalLahir"].value;
//     if (d.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let e = document.forms["psbOnline"]["inputNomorKK"].value;
//     if (e.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let f = document.forms["psbOnline"]["inputNamaAyah"].value;
//     if (f.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let g = document.forms["psbOnline"]["inputNomorNikAyah"].value;
//     if (g.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let h = document.forms["psbOnline"]["inputNamaIbu"].value;
//     if (h.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let i = document.forms["psbOnline"]["inputNomorNikIbu"].value;
//     if (i.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let j = document.forms["psbOnline"]["inputNomorTelepon"].value;
//     if (j.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let k = document.forms["psbOnline"]["inputDesa"].value;
//     if (k.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let l = document.forms["psbOnline"]["inputRt"].value;
//     if (l.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let m = document.forms["psbOnline"]["inputRw"].value;
//     if (m.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let n = document.forms["psbOnline"]["inputKecamatan"].value;
//     if (n.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }
    
//     let o = document.forms["psbOnline"]["inputKabupaten"].value;
//     if (o.trim() == "") {
//       Swal.fire({
//         icon: "error",
//         title: "ERROR",
//         text: "NIK wajib diisi!",
//       });
//       return false;
//     }  
// }

