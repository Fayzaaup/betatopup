var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 3000); // Waktu dalam milidetik sebelum berganti gambar (2000ms = 2 detik)
}

// Fungsi untuk membuka Sidepanel navbar
function openNav() {
  document.getElementById("sidepanel").style.width = "170px";
}

// Fungsi untuk menutup Sidepanel navbar
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
}

// Fungsi untuk membuka pop-up pencarian
function openSearch() {
  document.getElementById("search-overlay").style.display = "block";
}

// Fungsi untuk menutup pop-up pencarian
function closeSearch() {
  document.getElementById("search-overlay").style.display = "none";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  var tablinks = document.getElementsByClassName("tablink");
  if (tablinks.length > 0) {
    tablinks[0].click();
  }
});

// Fungsi untuk mengatur tindakan kembali saat URL berubah
function handleBackButton() {
  var currentURL = window.location.href;

  // Memantau perubahan URL
  setInterval(function() {
    var newURL = window.location.href;

    // Kembali ke menu jika URL berubah dari menuju halaman utama
    if (currentURL !== newURL && newURL.includes("home.html")) {
      openNav(); // Ganti dengan fungsi yang sesuai untuk membuka menu
      currentURL = newURL;
    }
  }, 100);
}

// Panggil fungsi handleBackButton saat halaman selesai dimuat
window.addEventListener("load", handleBackButton);

// Fungsi untuk menampilkan overlay popup
    function showPopup() {
      var overlay = document.getElementById("overlay");
      if (overlay) {
        overlay.style.display = "flex";
      }
    }
    
    // Fungsi untuk menutup overlay popup
    function closePopup() {
      var overlay = document.getElementById("overlay");
      if (overlay) {
        overlay.style.display = "none";
      }
    }
    
    // Panggil fungsi showPopup saat halaman selesai dimuat
    window.onload = showPopup;
