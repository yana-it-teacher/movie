// ==============================
// CineSearch — основний функціонал
// ==============================

const searchInput = document.getElementById("search");
const cardsContainer = document.getElementById("cards");

const movies = [
    {
        title: "Stellar Drift",
        year: 2026,
        genre: "Sci-Fi",
        rating: 8.9
    },
    {
        title: "Shadow Protocol",
        year: 2024,
        genre: "Thriller",
        rating: 8.5
    },
    {
        title: "Midnight Racer",
        year: 2025,
        genre: "Action",
        rating: 9.1
    },
    {
        title: "Echoes of Silence",
        year: 2023,
        genre: "Drama",
        rating: 7.8
    }
];


// ==============================
// Пошук
// ==============================

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {
        const title = card
            .querySelector(".movie-title")
            .textContent
            .toLowerCase();

        const meta = card
            .querySelector(".movie-meta")
            .textContent
            .toLowerCase();

        if (title.includes(query) || meta.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});


// ==============================
// Навігація
// ==============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        // прибираємо active у всіх
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // додаємо active натиснутому
        this.classList.add("active");

        const section = this.textContent.trim();

        if (section === "Home") {
            showAllMovies();
        }

        if (section === "Popular") {
            showPopularMovies();
        }

        if (section === "Top Rated") {
            showTopRatedMovies();
        }

        if (section === "Genres") {
            showGenres();
        }
    });
});


// ==============================
// Home — показати всі фільми
// ==============================

function showAllMovies() {

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {
        card.style.display = "flex";
    });

    searchInput.value = "";
}


// ==============================
// Popular
// ==============================

function showPopularMovies() {

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const rating = parseFloat(
            card.querySelector(".score").textContent
        );

        if (rating >= 8.5) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    searchInput.value = "";
}


// ==============================
// Top Rated
// ==============================

function showTopRatedMovies() {

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const rating = parseFloat(
            card.querySelector(".score").textContent
        );

        if (rating >= 9.0) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    searchInput.value = "";
}


// ==============================
// Genres
// ==============================

function showGenres() {

    const genre = prompt(
        "Введіть бажаний жанр"
    );

    if (!genre) return;

    const cards = document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const meta = card
            .querySelector(".movie-meta")
            .textContent
            .toLowerCase();

        if (meta.includes(genre.toLowerCase())) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}


// ==============================
// See All
// ==============================

const seeAll = document.querySelector(".see-all");

seeAll.addEventListener("click", function () {

    showAllMovies();

    this.textContent = "All Movies";

    setTimeout(() => {
        this.textContent = "See All";
    }, 1500);
});


// ==============================
// More Info
// ==============================

const detailsButton = document.querySelector(".details-btn");

detailsButton.addEventListener("click", function () {

    alert(
        "NEO ARC: CHRONICLES\n\n" +
        "Створено в 2026\n" +
        "Сервіс для пошуку фільмів\n" +
        "LogicaSchool\n\n" +
        "У неоновому підземному світі Neo Arc " +
        "кібернетичний агент намагається розшифрувати " +
        "пакет даних, який може зруйнувати глобальну мережу."
    );
});


// ==============================
// Watch Trailer
// ==============================

const trailerButton = document.querySelector(".watch-btn");

trailerButton.addEventListener("click", function () {

    alert(
        "🎬 NEO ARC: CHRONICLES\n\n" +
        "Трейлер буде доступний тут."
    );
});
// ==============================
// Footer links
// ==============================

const irishkalink = "https://www.youtube.com/watch?v=oHg5SJYRHA0";

const footerLinks = document.querySelectorAll(".footer-links a");

footerLinks.forEach(link => {
    link.addEventListener("click", function () {
        window.location.href = irishkalink;
    });
});