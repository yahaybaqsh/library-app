# Library App

A simple library management application built with HTML, CSS, and JavaScript.

## Features

- Add new books to your library
- Mark books as read or unread
- Delete books from your library
- View all books in a clean, organized layout

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## How to Use

1. Click the "Add New Book" button to open the book form
2. Fill in the book details (title, author, number of pages, and read status)
3. Click "Add Book" to add it to your library
4. Use the "Toggle Read" button to change a book's read status
5. Use the "Delete" button to remove a book from your library

## Project Structure

- **Book Constructor**: Creates book objects with unique IDs
- **Library Array**: Stores all book objects
- **DOM Manipulation**: Displays books and handles user interactions
- **Form Handling**: Collects user input and prevents default form submission

## Implementation Details

- Each book has a unique ID generated using `crypto.randomUUID()`
- Books are displayed as cards in a responsive grid layout
- The application uses vanilla JavaScript with no external dependencies
- Form validation is handled using HTML5 required attributes
- Read status is visually indicated with color-coded badges

## Getting Started

Simply open the `index.html` file in your web browser to start using the library app.

## Note

This is a frontend-only application. Book data is not persisted between page reloads.
