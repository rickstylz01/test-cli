#!/usr/bin/env node

const axios = require('axios');

// Make axios request to log out data from Googles Books API
const getBooks = async () => {
  try {
    return await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
  } catch (error) {
    console.error(error);
  }
}

console.log('Hello World');
