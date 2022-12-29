const fs = require('fs');

module.exports = bookToSave => {
  fs.appendFile('reading-list.txt', bookToSave, err => {
    if (err) throw err;
    console.log(`Saved!`);
  })
}
