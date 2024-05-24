// Fungsi Solve yang menerima satu argumen val
function Solve(val) {
  // Ambil element HTML input dengan ID "InputResult"
  let inputResult = document.getElementById("inputResult");
  // Tambakan nilai argumen val ke nilai elemen input
  inputResult.value += val;
}

// Fungsi Result yang tidak menerima argumen apapun
function Result() {
  // Ambil nilai elemen input dengan ID "inputResult"
  let num1 = document.getElementById("inputResult").value;
  // Mengganti persentase ekspresi dengan value yang di nilai evaluasi
  num1 = num1.replace(/(\d+(\.\d+)?)%/g, function (p1) {
    return (parseFloat(p1) / 100).toString();
  });
  // Evaluasi nilai dengan elemen input sebagai ekspresi JavaScript menggunakan fungsi eval
  let num2 = eval(num1);
  //atur nilai elemen input menjadihasil evaluasi
  document.getElementById("inputResult").value = num2;
}

// Fungsi clear yang tidak menerima argumen apapun 
function Clear() {
  // Ambil elemen HTML dengan ID "inputResult"
  let inp = document.getElementById("inputResult");
  // Bersiihkan nilai dengan elemen input
  inp.value = "";
}

// Fungsi back yang tidak menerima argumen apapun
function Back() {
  // Ambil elemen HTML dengan ID "inputResult"
  let ev = document.getElementById("inputResult");
  // Hapus karakter terakhir dari nilai elemen input
  ev.value = ev.value.slice(0, -1);
}