// Fungsi untuk membuka sidenav
function openNav() {
  document.getElementById("sidepanel").style.width = "250px";
  document.getElementById("sidepanel").style.display = "block";
}

// Fungsi untuk menutup sidenav
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
  document.getElementById("sidepanel").style.display = "none";
}

// Fungsi untuk membuka overlay pencarian
function openSearch() {
  document.getElementById("search-overlay").style.display = "block";
}

// Fungsi untuk menutup overlay pencarian
function closeSearch() {
  document.getElementById("search-overlay").style.display = "none";
}
// Memeriksa apakah data pemesanan tersimpan di Local Storage
if (localStorage.getItem('orderData')) {
  // Mendapatkan data pemesanan dari Local Storage
  var orderData = JSON.parse(localStorage.getItem('orderData'));

  // Membuat elemen <tr> baru untuk data pemesanan
  var newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${orderData.userId} (${orderData.zoneId})</td>
    <td>${orderData.nickname}</td>
    <td>${orderData. layanan}</td>
    <td>${orderData.nominal}</td>
    <td>${orderData.harga}</td>
    <td>${orderData.nomorWa}</td>
    <td>Sukses</td>
  `;

  // Menambahkan elemen <tr> ke dalam tabel
  table.appendChild(newRow);
}
// Mendapatkan referensi elemen-elemen yang dibutuhkan
var deleteIcons = document.querySelectorAll('.delete-icon');

// Menambahkan event listener untuk setiap ikon tongsampah
deleteIcons.forEach(function (deleteIcon) {
  deleteIcon.addEventListener('click', function () {
    var row = deleteIcon.parentNode.parentNode;
    var id = row.querySelector('td[data-id]').getAttribute('data-id');

    // Menampilkan popup peringatan
    var confirmDelete = confirm('Anda yakin ingin menghapus data ini?');
    if (confirmDelete) {
      // Menghapus data dari tabel dan Local Storage (jika diperlukan)
      deleteRow(id);
      row.remove();
    }
  });
});

// Fungsi untuk menghapus data dari tabel dan Local Storage (jika diperlukan)
function deleteRow(id) {
  // Hapus data dari Local Storage jika menggunakan penyimpanan lokal
  // localStorage.removeItem(id);

  // Implementasikan logika penghapusan data sesuai kebutuhan
}
