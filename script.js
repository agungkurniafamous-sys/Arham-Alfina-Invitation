let currentPage = 1;

function nextPage(n) {
  document.getElementById("page" + currentPage).classList.remove("active");
  currentPage = n;
  document.getElementById("page" + currentPage).classList.add("active");
}

function openInvitation() {
  const name = document.getElementById("guestName").value.trim();
  if (!name) {
    alert("Masukkan nama Anda terlebih dahulu!");
    return;
  }
  document.getElementById("guestText").innerText =
    `Kepada Yth. Bapak/Ibu/Saudara/i ${name}`;
  nextPage(3);
}
