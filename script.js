let cart = [];
let total = 0;

/* ================= CART ================= */
function addToCart(nama, harga) {
    cart.push({ nama, harga });
    total += harga;

    document.getElementById("cartCount").innerText = cart.length;
    renderCart();

    // NOTIFIKASI
    alert(nama + " berhasil ditambahkan ke keranjang 🛒");
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

function removeItem(index) {
    total -= cart[index].harga;
    cart.splice(index, 1);

    document.getElementById("cartCount").innerText = cart.length;
    renderCart();
}

function renderCart() {
    const list = document.getElementById("cartItems");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nama} - Rp ${item.harga.toLocaleString()}
            <button onclick="removeItem(${index})">❌</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total.toLocaleString();
}

/* ================= CHECKOUT KE WA ================= */
function checkout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let pesan = "Halo Admin Dailypents 👋%0A%0ASaya ingin memesan:%0A";

    cart.forEach((item, i) => {
        pesan += `${i + 1}. ${item.nama} - Rp ${item.harga.toLocaleString()}%0A`;
    });

    pesan += `%0ATotal: Rp ${total.toLocaleString()}%0A%0ATerima kasih 🙏`;

    const noWA = "6288983531668"; // ganti kalau perlu
    window.open(`https://wa.me/${noWA}?text=${pesan}`, "_blank");

    // reset cart
    cart = [];
    total = 0;
    renderCart();
    document.getElementById("cartCount").innerText = 0;
}

/* ================= SEARCH ================= */
const searchInput = document.getElementById("searchinput");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const namaProduk = card.querySelector("h3").innerText.toLowerCase();

            if (namaProduk.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

/* ================= KATEGORI ================= */
const kategoriButtons = document.querySelectorAll(".kategori");

kategoriButtons.forEach(button => {
    button.addEventListener("click", () => {
        kategoriButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const kategori = button.dataset.kategori;
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            if (kategori === "all" || card.classList.contains(kategori)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // reset search
        document.getElementById("searchinput").value = "";
    });
});

/* ================= LIHAT KOLEKSI ================= */
function scrollKeProduk() {
    // tampilkan semua produk
    document.querySelectorAll(".card").forEach(card => {
        card.style.display = "block";
    });

    // reset kategori & search
    kategoriButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector('[data-kategori="all"]').classList.add("active");
    document.getElementById("searchinput").value = "";

    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });
}

    const whyItems = document.querySelectorAll('.why-item');

    whyItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.add('active-click');

            setTimeout(() => {
                item.classList.remove('active-click');
            }, 300);
        });
    });

    

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        whyItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();


  whyItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('active');
      setTimeout(() => {
        item.classList.remove('active');
      }, 350);
    });
  });
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

    


  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

document.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', function () {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});



