const fs = require('fs');

module.exports = async () => {
  await fs.readFile('reading-list.txt', 'utf8',    (err, list) => {
    if (err) {
      console.error(`There was an issue finding your list\n${err}`)
    } else if (!list) {
      console.log('Your reading list is empty.');
    } else {
      console.log(`Your reading list:\n--------------------------------------------\n\n${list}`);
    }
  });
};
