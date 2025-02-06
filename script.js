let input = document.getElementById("input");
let tombol = document.getElementById("tombol");
let hasil = document.getElementById("hasil");
let nama = document.getElementById("nama");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    tombol.click();
  }
});

tombol.addEventListener("click", Khodam);

function Khodam() {
  const namaInput = input.value.trim();
  if (namaInput === "") {
    hasil.innerHTML = "Masukkan Nama!";
    nama.innerHTML = "Isi Nama!";
    return;
  }
  nama.innerHTML = namaInput;
  const acak = Math.floor(Math.random() * listKhodam.length);
  hasil.innerHTML = `${listKhodam[acak]}`;
}

const listKhodam = [
  "Bunga Bangkai",
  "Macan Embun",
  "Rajawali Petir",
  "Hitam",
  "Harimau Bumi",
  "Anggrek Api",
  "Kuda Samudra",
  "Serigala Awan",
  "Pohon Perak",
  "Ular Angin",
  "Elang Senja",
  "Mawar Berduri Emas",
  "Naga Akar",
  "Buaya Rimba",
  "Cendana Biru",
  "Singa Langit",
  "Kaktus Merah",
  "Kepik Baja",
  "Beringin Gaib",
  "Kumbang Hitam",
];
