#!/usr/bin/env node
require('dotenv').config();
const axios = require('axios');
const prompt = require('prompt-sync')();
const apiKey = process.env.BOOKS_API_KEY;

// ---------------
// Get User Input
// ---------------
let keyword = prompt('Search for a book: ');
console.log(book);


// Make axios request to log out data from Googles Books API
async function doGetRequest() {
  let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&key=${apiKey}`);

  let data = res.data;
  console.log(data);
}

doGetRequest();



