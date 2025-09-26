// Array to store books
const myLibrary = [];

// Book constructor
function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// Prototype method to toggle read status
Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

// Add book to library
function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  displayBooks();
}

// Display books
function displayBooks() {
  const container = document.getElementById("booksContainer");
  container.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.isRead ? "Read ✅" : "Not Read ❌"}</p>
      <button class="toggle-btn">Toggle Read</button>
      <button class="remove-btn">Remove</button>
    `;

    // Toggle button
    card.querySelector(".toggle-btn").addEventListener("click", () => {
      book.toggleRead();
      displayBooks();
    });

    // Remove button
    card.querySelector(".remove-btn").addEventListener("click", () => {
      const index = myLibrary.findIndex((b) => b.id === book.id);
      if (index > -1) {
        myLibrary.splice(index, 1);
        displayBooks();
      }
    });

    container.appendChild(card);
  });
}

// Modal Form logic
const dialog = document.getElementById("bookDialog");
const newBookBtn = document.getElementById("newBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

newBookBtn.addEventListener("click", () => dialog.showModal());

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  addBookToLibrary(title, author, pages, isRead);
  bookForm.reset();
  dialog.close();
});

// Add some sample books manually
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, false);
