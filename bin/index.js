#!/usr/bin/env node
const axios = require('axios');
const prompt = require('prompt-sync')();

// Get User Input
let keyword = prompt('Search for a book: ');

// Make axios request to log out data from Googles Books API
async function searchForBooks() {
  try {
    if (keyword === "" || keyword === undefined) {
      console.log('Please enter a book request.')
    }
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=5&printType=books&projection=lite`
    );
    const data = res.data;
    printListOfBooks(data);
  } catch (error) {
    console.error(`Sorry that book shows no results: ${error}`);
  }
}

const printListOfBooks = data => {
  data.items.forEach(book => {
    console.log(`
     Title: ${book.volumeInfo.title}
     Author(s): ${book.volumeInfo.authors}
     Publisher: ${book.volumeInfo.publisher}

     ID: ${book.id}
     ----------------------------------------------
     `);
  })
  // searchBookById()
};

// Create a collection for the user to save books
async function searchBookById() {
  const bookId = prompt('Enter the ID of a book you\'d like to save: ');
  // Axios request to find a specific book using the book ID
  const specificBook = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  formatData(specificBook);
}

function formatData(book) {
  // const bookData = `\nTitle: ${book.data.volumeInfo.title}\nAuthor(s): ${book.data.volumeInfo.author}\nPublisher: ${book.data.volumeInfo.publisher}\n`;
  const bookData = `
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher} 
    ----------------------------------------------
  `;
  console.log(bookData);
}

searchForBooks();
