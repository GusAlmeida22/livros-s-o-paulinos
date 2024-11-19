// Array com informações dos livros
const books = [
    {
        title: "São Paulo FC: A História do Tricolor",
        description: "Uma viagem pela rica história do São Paulo Futebol Clube.",
        image: "https://via.placeholder.com/200x300.png?text=História+do+SPFC",
    },
    {
        title: "Táticas e Glórias",
        description: "Análise das maiores vitórias do São Paulo nos gramados.",
        image: "https://via.placeholder.com/200x300.png?text=Táticas+e+Glórias",
    },
    {
        title: "Memórias de um Torcedor",
        description: "Crônicas e memórias de um torcedor apaixonado pelo Tricolor.",
        image: "https://via.placeholder.com/200x300.png?text=Memórias+de+um+Torcedor",
    },
    {
        title: "Jogadores Icônicos",
        description: "Histórias dos grandes ídolos do São Paulo.",
        image: "https://via.placeholder.com/200x300.png?text=Jogadores+Icônicos",
    },
    {
        title: "Tricolor em Campo",
        description: "A história do Morumbi e grandes momentos em casa.",
        image: "https://via.placeholder.com/200x300.png?text=Tricolor+em+Campo",
    },
];

// Carregar os livros no grid
function loadBooks() {
    const bookGrid = document.getElementById("book-grid");

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
        `;

        // Evento de clique para mostrar detalhes
        bookDiv.addEventListener("click", () => {
            showBookDetails(book);
        });

        bookGrid.appendChild(bookDiv);
    });
}

// Mostrar detalhes do livro
function showBookDetails(book) {
    const bookDetails = `
        <div id="book-details-overlay">
            <div id="book-details">
                <h2>${book.title}</h2>
                <img src="${book.image}" alt="${book.title}">
                <p>${book.description}</p>
                <button id="close-details">Fechar</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", bookDetails);

    // Fechar os detalhes
    document.getElementById("close-details").addEventListener("click", () => {
        document.getElementById("book-details-overlay").remove();
    });
}

// Filtrar livros
document.getElementById("search-bar").addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const bookElements = document.querySelectorAll(".book");

    bookElements.forEach((book, index) => {
        if (books[index].title.toLowerCase().includes(searchText)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});

// Inicializar os livros
loadBooks();
