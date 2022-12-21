#!/usr/bin/env node

const axios = require('axios');
const prompt = require('prompt');

// Make axios request to log out data from Googles Books API
async function doGetRequest() {
  let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');

  let data = res.data;
  console.log(data);
}

doGetRequest();


// ---------------
// Get User Input
// ---------------
prompt.start();

// Get a keyword or string from the user:
