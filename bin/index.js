#!/usr/bin/env node
require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')();

// ---------------
// Get User Input
// ---------------
let keyword = prompt('Search for a book: ');
console.log(keyword);

// Make axios request to log out data from Googles Books API
async function doGetRequest() {
  try {
    if (keyword === "" || keyword === undefined) {
      console.log('Please enter a book request.')
    }

    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=5&printType=books&projection=lite`
    );

    let data = res.data;
    let bookInfo = data.items.forEach(book => {
      console.log(`
     Title: ${book.volumeInfo.title}
     Author(s): ${book.volumeInfo.authors}
     Publisher: ${book.volumeInfo.publisher}
     
     ID: ${book.id}
     ----------------------------------------------
     `)
    })


  } catch (error) {
    console.error(error);
  }
}

doGetRequest();



