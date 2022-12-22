#!/usr/bin/env node

const axios = require('axios');
const prompt = require('prompt-sync')();

// Make axios request to log out data from Googles Books API
async function doGetRequest() {
  let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key');

  let data = res.data;
  console.log(data);
}

// doGetRequest();


// ---------------
// Get User Input
// ---------------
let book = prompt('Hello.  What book are you looking for?: ');
console.log(book);

// Get a keyword or string from the user:
