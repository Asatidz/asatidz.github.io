document.getElementById("mulai").addEventListener("click", function () {
  const kotak = document.getElementById("kotak");
  let pos = 0;
  const interval = setInterval(() => {
    if (pos >= 300) {
      clearInterval(interval); // Stop animasi setelah mencapai 300px
    } else {
      pos++; // Naikkan posisi
      kotak.style.left = pos + "px"; // Atur posisi kotak
    }
  }, 5); // Ubah nilai ini untuk mempercepat atau memperlambat animasi
});
