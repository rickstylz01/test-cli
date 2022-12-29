const axios = require("axios");
const utilities = require('../utils/controllers');

module.exports = async (keyword) => {
  try {
    if (keyword === "" || keyword === undefined) {
      console.log('Please enter a book request.')
    }
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=5&printType=books&projection=lite`
    );
    const data = res.data;
    utilities.printListOfBooks(data);
  } catch (error) {
    console.error(`Sorry that book shows no results: ${error}`);
  }
}
