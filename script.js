let currentPage = 1;

function nextPage(n) {
  document.getElementById('page' + currentPage).classList.remove('active');
  currentPage = n;
  document.getElementById('page' + currentPage).classList.add('active');
}

function openInvitation() {
  const name = document.getElementById('guestName').value.trim();
  if (!name) { alert('Masukkan nama Anda terlebih dahulu'); return; }
  document.getElementById('guestText').setAttribute("data-text", `Kepada Yth. Bapak/Ibu/Saudara/i ${name}`);
  document.getElementById('guestMention').innerText = `Merupakan kebahagiaan bagi kami apabila Saudara/i ${name} berkenan hadir.`;
  nextPage(3);
  runTyping(); // restart typing di halaman 3
}

// Typing effect
function typeEffect(element, speed = 40) {
  const text = element.getAttribute("data-text");
  element.innerHTML = "";
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.style.borderRight = "none";
    }
  }
  typing();
}

function runTyping() {
  const elements = document.querySelectorAll(".typing");
  elements.forEach((el, index) => {
    setTimeout(() => typeEffect(el, 40), index * 2000);
  });
}

// Countdown
function countdown() {
  const eventDate = new Date("2025-10-13T10:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
      document.getElementById("time").innerText = "Acara sudah dimulai";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerText = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  runTyping();
  countdown();
});
