#!/usr/bin/env node
const yargs = require('yargs');
const searchBook = require('../utils/searchBookByKeyword');
const saveBook = require('../utils/searchBookById');
const printReadingList = require('../utils/printReadingList');


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
    searchBook(argv.keyword).then(response => console.log(response));
  }
})

// Create save command
yargs.command({
  command: 'save',
  describe: 'Save a book to your reading list',
  builder: {
    bookId: {
      describe: 'Id for the book you\'d like to save',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    saveBook(argv.bookId).then(response => console.log(response));
  }
})

// Create a list command
yargs.command({
  command: 'list',
  describe: 'Print your reading list',
  handler: function () {
    printReadingList();
  }
})
  .help()

yargs.parse();
