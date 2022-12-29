const axios = require("axios");

module.exports = async id => {
  try {
    // Axios request to find a specific book using the book ID
    return await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  } catch (error) {
    console.error(error);
  }
}
