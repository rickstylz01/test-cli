const searchBookById = require('../utils/searchBookById');
const fs = require("fs");

module.exports = async id => {
  try {
    const book = await searchBookById(id);

    const bookData = `
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher} 
    ----------------------------------------------
  `;

    await fs.appendFile('reading-list.txt', bookData, err => {
      if (err) throw err;
      console.log(`Saved!`);
    })

    return book;
  } catch (error) {
    console.error(error);
  }
};
