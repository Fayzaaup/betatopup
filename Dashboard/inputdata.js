// Ambil elemen form
const addProductForm = document.getElementById('addProductForm');

// Tambahkan event listener untuk saat form disubmit
addProductForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form untuk melakukan submit default

  // Ambil nilai input dari form
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productCode = document.getElementById('productCode').value;

  // Buat template produk
  const productTemplate = `
    <div class="menu-item diamond" data-name="${productName}" data-price="${productPrice}" code-product="${productCode}">
      <h3>${productName}</h3>
      <p>Rp.${productPrice}</p>
    </div>
  `;

  // Baca file HTML template atau halaman pemesanan yang sudah ada
  fetch('../dm/MobileLegendsID.html')
    .then(response => response.text())
    .then(html => {
      // Buat elemen HTML dari string HTML yang dibaca
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Dapatkan elemen menu-list di dalam dokumen
      const menuList = doc.querySelector('.menu-list');

      // Tambahkan template produk ke dalam menu-list
      menuList.innerHTML = productTemplate;

      // Buat objek URL dari dokumen yang diperbarui
      const updatedHTML = doc.documentElement.outerHTML;
      const blob = new Blob([updatedHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      // Buka URL baru di jendela/Tab baru
      window.open(url, '_blank');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
// Mendapatkan produk yang disimpan dalam Local Storage
function getStoredProducts() {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
}

// Menyimpan produk ke dalam Local Storage
function storeProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

// Menampilkan produk yang sudah disimpan saat halaman dimuat
function displayStoredProducts() {
  const storedProducts = getStoredProducts();
  const tableBody = document.querySelector('#productTable tbody');

  storedProducts.forEach((product) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>Rp.${product.price}</td>
      <td>${product.code}</td>
      <td><button onclick="deleteProduct('${product.code}')">Hapus</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Membuka jendela pemesanan.html
  const winPemesanan = window.open("../dm/MobileLegendsID.html", "_blank");

  // Menunggu file pemesanan.html terbuka sebelum mengakses elemen menu-list
  winPemesanan.onload = function () {
  
  // Simpan produk ke dalam Local Storage
  const storedProducts = getStoredProducts();
  storedProducts.push({
    name: name,
    price: price,
    code: code,
  });
  storeProducts(storedProducts);
}

// Menangani submit form
const form = document.getElementById("addProductForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productCode = document.getElementById("productCode").value;

  // Memanggil fungsi untuk menambahkan produk ke menu-list di file "produk.html" dan "pemesanan.html"
  addProductToList(productName, productPrice, productCode);

  // Tambahkan produk ke dalam tabel
  const tableBody = document.querySelector('#productTable tbody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${productName}</td>
    <td>Rp.${productPrice}</td>
    <td>${productCode}</td>
    <td><button onclick="deleteProduct('${productCode}')">Hapus</button></td>
  `;
  tableBody.appendChild(row);

  // Reset form input
  form.reset();
});

// Menghapus produk dari Local Storage dan tabel
function deleteProduct(code) {
  // Hapus produk dari Local Storage
  const storedProducts = getStoredProducts();
  const filteredProducts = storedProducts.filter((product) => product.code !== code);
  storeProducts(filteredProducts);

  // Hapus produk dari tabel
  const tableBody = document.querySelector('#productTable tbody');
  const rows = tableBody.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const codeCell = row.getElementsByTagName('td')[2];
    if (codeCell.textContent === code) {
      tableBody.removeChild(row);
      break;
    }
  }
}

// Menampilkan overlay konfirmasi penghapusan produk
function showDeleteOverlay() {
  const overlay = document.getElementById('deleteOverlay');
  overlay.style.display = 'flex';
}

// Menutup overlay konfirmasi penghapusan produk
function closeDeleteOverlay() {
  const overlay = document.getElementById('deleteOverlay');
  overlay.style.display = 'none';
}

// Menghapus produk setelah konfirmasi
function deleteConfirmedProduct() {
  const code = localStorage.getItem('deleteProductCode');
  deleteProduct(code);
  closeDeleteOverlay();
}

// Menangani klik tombol hapus produk
function handleDeleteButton(code) {
  localStorage.setItem('deleteProductCode', code);
  showDeleteOverlay();
}

// Menangani klik tombol konfirmasi penghapusan produk
const deleteConfirmButton = document.getElementById('deleteConfirmButton');
deleteConfirmButton.addEventListener('click', deleteConfirmedProduct);

// Menangani klik tombol batal penghapusan produk
const deleteCancelButton = document.getElementById('deleteCancelButton');
deleteCancelButton.addEventListener('click', closeDeleteOverlay);

// Memanggil fungsi untuk menampilkan produk yang sudah disimpan saat halaman dimuat
displayStoredProducts();

// Menghitung total harga saat memilih produk
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    const price = parseInt(item.getAttribute("data-price"));
    const totalBayar = document.getElementById("totalbayar");
    totalBayar.value = price;
  });
});
