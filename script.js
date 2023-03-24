// Example starter JavaScript for disabling form submissions if there are invalid fields

// Kami meggunakan API Kalender islam dari "http://api.aladhan.com/v1/gToH"

var tanggal = new Date().getDate()-1;
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
