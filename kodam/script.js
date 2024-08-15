document.getElementById("submitBtn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value;
    const randomWords = ["Sakti", "Berani", "Bijaksana", "Setia", "Cerdas", "Tangguh"];
    const randomIndex = Math.floor(Math.random() * randomWords.length);

    if (/^[A-Za-z\s]+$/.test(nameInput) && nameInput !== "") {
        document.getElementById("randomWord").textContent = `kodam kamu: ${randomWords[randomIndex]}`;
    } else {
        alert("Silakan masukkan nama yang valid (hanya huruf dan spasi).");
    }
});

document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("nameInput").value = "";
    document.getElementById("randomWord").textContent = "";
});

// TOMBOL KECIL

window.onload = function() {
    setTimeout(function() {
        document.getElementById("chatButton").style.display = "block";
    }, 3000); // Tombol muncul setelah 3 detik
};
