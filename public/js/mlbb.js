// Add this function to send data to WhatsApp
function kirimWhatsapp() {
    var userId = document.getElementById("userIdInput").value;
    var zoneId = document.getElementById("zoneIdInput").value;
    var totalDiamond = document.getElementById("totalDiamond").innerText;
    var totalHarga = document.getElementById("totalHarga").innerText;
    var game = document.getElementById("game").innerText;
    var nowa = document.getElementById("nowa").value;

    // You can customize the message based on your needs
    var message = "𝗡𝗘𝗪 𝗢𝗥𝗗𝗘𝗥\n\n" + "𝗚𝗔𝗠𝗘𝗦 : " + game + "\n" + "𝗨𝗦𝗘𝗥 𝗜𝗗 : " + userId + "\n" + "𝗭𝗢𝗡𝗘 𝗜𝗗 : " + zoneId + "\n" + "𝗡𝗢𝗠𝗢𝗥 : " + nowa + "\n" + "𝗜𝗧𝗘𝗠 : " + totalDiamond + "\n" + "𝗛𝗔𝗥𝗚𝗔 : " + totalHarga + "\n" + "𝗣𝗔𝗬𝗠𝗘𝗡𝗧 : " + "https://payment.fayzaafx.tech\n\n" + "Perhatian !!!\n" + "Payment untuk game mobile legends adalah FLYY QRIS. Karena admin Mobile Legends adalah Flyy Store." + "\n\n" + "© Cs Fayy Shop";

    // Replace 'your-whatsapp-number' with the actual WhatsApp number
    var whatsappNumber = 'your-whatsapp-number';

    // Create the WhatsApp link
    var whatsappLink = "https://wa.me/6282193394469" + whatsappNumber + "?text=" + encodeURIComponent(message);

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
}