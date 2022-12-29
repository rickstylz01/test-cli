module.exports = data => {
  data.items.forEach(book => {
    console.log(`
     Title: ${book.volumeInfo.title}
     Author(s): ${book.volumeInfo.authors}
     Publisher: ${book.volumeInfo.publisher}

     ID: ${book.id}
     ----------------------------------------------
     `);
  })
};
