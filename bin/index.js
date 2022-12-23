#!/usr/bin/env node
require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')();

// ---------------
// Get User Input
// ---------------
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
    printSearchResults(data);
  } catch (error) {
    console.error(`Sorry that book shows no results: ${error}`);
  }
}

const printSearchResults = data => {
  data.items.forEach(book => {
    console.log(`
     Title: ${book.volumeInfo.title}
     Author(s): ${book.volumeInfo.authors}
     Publisher: ${book.volumeInfo.publisher}

     ID: ${book.id}
     ----------------------------------------------
     `);
  })
};

// Create a collection for the user to save books
const saveBookToReadingList = () => {
  const readingList = [];
  const bookId = prompt('Enter the ID of the book you\'d like to save: ');
  console.log(bookId);
};


searchForBooks();
// saveBookToReadingList();
