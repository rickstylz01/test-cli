module.exports = async book => {
  return `
    Title: ${book.data.volumeInfo.title}
    Author(s): ${book.data.volumeInfo.authors}
    Publisher: ${book.data.volumeInfo.publisher} 
    ----------------------------------------------
  `;
};
