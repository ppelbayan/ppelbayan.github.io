function validateDaftar() {
    let a = document.forms["psbOnline"]["inputNama"].value;
    if (a.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Nama Lengkap tidak boleh kosong!",
      });
      return false;
    }
    
    let b = document.forms["psbOnline"]["inputNomorNik"].value;
    if (b.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let c = document.forms["psbOnline"]["inputTempatLahir"].value;
    if (c.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let d = document.forms["psbOnline"]["inputTanggalLahir"].value;
    if (d.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let e = document.forms["psbOnline"]["inputNomorKK"].value;
    if (e.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let f = document.forms["psbOnline"]["inputNamaAyah"].value;
    if (f.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let g = document.forms["psbOnline"]["inputNomorNikAyah"].value;
    if (g.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let h = document.forms["psbOnline"]["inputNamaIbu"].value;
    if (h.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let i = document.forms["psbOnline"]["inputNomorNikIbu"].value;
    if (i.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let j = document.forms["psbOnline"]["inputNomorTelepon"].value;
    if (j.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let k = document.forms["psbOnline"]["inputDesa"].value;
    if (k.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let l = document.forms["psbOnline"]["inputRt"].value;
    if (l.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let m = document.forms["psbOnline"]["inputRw"].value;
    if (m.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let n = document.forms["psbOnline"]["inputKecamatan"].value;
    if (n.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }
    
    let o = document.forms["psbOnline"]["inputKabupaten"].value;
    if (o.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "NIK wajib diisi!",
      });
      return false;
    }  
}