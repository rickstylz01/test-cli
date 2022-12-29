// Get User Input
// let keyword = prompt('Search for a book: ');

// Make axios request to log out data from Googles Books API
const axios = require("axios");
const fs = require("fs");
const prompt = require('prompt-sync')();

exports.printListOfBooks = data => {
  data.items.forEach(book => {
    console.log(`
     Title: ${book.volumeInfo.title}
     Author(s): ${book.volumeInfo.authors}
     Publisher: ${book.volumeInfo.publisher}

     ID: ${book.id}
     ----------------------------------------------
     `);
  })
  searchBookById()
};

// Create a collection for the user to save books
async function searchBookById() {
  const bookId = prompt('Enter the ID of a book you\'d like to save: ');
  // Axios request to find a specific book using the book ID
  const specificBook = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
  const formattedBook = formatData(specificBook);
  createAndSaveReadingList(formattedBook);
}

function createAndSaveReadingList(bookToSave) {
  fs.appendFile('reading-list.txt', bookToSave, err => {
    if (err) throw err;
    console.log(`Saved!`);
  })
  openReadingList();
}

function formatData(book) {
  return `
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher} 
    ----------------------------------------------
  `;
}

// Open file to see reading list
const openReadingList = async () => {
  await fs.readFile('reading-list.txt', 'utf8',    (err, list) => {
    if (err) {
      console.error(`There was an issue finding your list\n${err}`)
    } else if (!list) {
      console.log('Your reading list is empty.');
    } else {
      console.log(`Your reading list:\n--------------------------------------------\n\n${list}`);
    }
  });
};

// searchForBooks();
