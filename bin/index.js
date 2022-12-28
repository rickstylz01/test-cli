#!/usr/bin/env node
const yargs = require('yargs');

const argv = yargs
  .command('search', 'Search Google\'s API for a book', {
    book: {
      description: 'search for a book',
      alias: 's',
      type: 'string'
    }
  })
  .help()
  .alias('help', 'h').argv;

const userCommand = argv._[0];
switch (userCommand) {
  case 'search':
    console.log('You chose to search for a book');
    break;
  case 'save':
    console.log('You chose to save a book');
    break;
  case 'list':
    console.log('You chose to print your reading list');
    break;
  default:
    console.log('this is not a leap year')
}


// console.log(argv);
