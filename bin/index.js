#!/usr/bin/env node
const yargs = require('yargs');
const searchCommand = require('../utils/searchBookByKeyword');

// Create search command
yargs.command({
  command: 'search',
  describe: 'Search for a book',
  builder: {
    keyword: {
      describe: 'Book query string',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    searchCommand(argv.keyword).then(response => console.log(response));
  }
})
// Create save command
yargs.command({
  command: 'save',
  describe: 'Save a book to your reading list',
  handler: function () {
    console.log('You chose to save a book!')
  }
})
// Create a list command
yargs.command({
  command: 'list',
  describe: 'Print your reading list',
  handler: function () {
    console.log('You chose to print your reading list!')
  }
})
  .help()

yargs.parse();


// const userCommand = argv._[0];
// switch (userCommand) {
//   case 'search':
//     console.log('You chose to search for a book');
//     break;
//   case 'save':
//     console.log('You chose to save a book');
//     break;
//   case 'list':
//     console.log('You chose to print your reading list');
//     break;
//   default:
//     console.log('this is not a leap year')
// }


// console.log(argv);
