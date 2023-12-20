const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((accordionHeader) => {
	accordionHeader.addEventListener("click", (event) => {
		accordionHeader.classList.toggle("active");
		const accordionBody = accordionHeader.nextElementSibling;
		if (accordionHeader.classList.contains("active")) {
			accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
		} else {
			accordionBody.style.maxHeight = 0;
		}
	});
});

// Button
var buttons = document.querySelectorAll("#button");
buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		buttons.forEach(function (btn) {
			btn.classList.remove("border-secondaryBlue");
			btn.classList.add("border-primary");
		});

		this.classList.remove("border-primary");
		this.classList.add("border-secondaryBlue");
	});
});

// Navabr

window.addEventListener("scroll", function () {
	const navbar = document.getElementById("navbar");
	if (window.pageYOffset > 0) {
		navbar.classList.add("sticky", "top-0");
	} else {
		navbar.classList.remove("sticky", "top-0");
	}
});

function ubahHarga(harga) {
	var hargaFormatted = harga.toLocaleString("id-ID");
	document.getElementById("totalHarga").textContent = "Rp. " + hargaFormatted;
}

function ubahDiamond(diamond) {
    var diamondFormatted = diamond.toLocaleString("id-ID");
    document.getElementById("totalDiamond").textContent = diamondFormatted + " UC";
}

const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

button.addEventListener("click", () => {
	button.style.display = "none";
	paragraph.style.display = "block";
});
