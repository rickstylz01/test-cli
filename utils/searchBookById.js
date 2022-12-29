const axios = require("axios");
const formatBook = require('../utils/formatBookData');
const saveBook = require('../utils/saveBook');

module.exports = async bookId => {
  try {
    // Axios request to find a specific book using the book ID
    const specificBook = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);

    const formattedBook = formatBook(specificBook);
    await saveBook(formattedBook);
  } catch (error) {
    console.error(error);
  }
}
