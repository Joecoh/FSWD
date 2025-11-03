const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let books = [];

function showMenu() {
  console.log(`
=== Library Management System ===
1. Add Book
2. View All Books
3. Search Book
4. Delete Book
5. Exit`);
  rl.question('Choose an option: ', handleMenu);
}

function handleMenu(option) {
  switch (option) {
    case '1':
      addBook();
      break;
    case '2':
      viewBooks();
      break;
    case '3':
      searchBook();
      break;
    case '4':
      deleteBook();
      break;
    case '5':
      console.log('Goodbye!');
      rl.close();
      break;
    default:
      console.log('Invalid option.');
      showMenu();
  }
}

function addBook() {
  rl.question('Enter book title: ', title => {
    rl.question('Enter author name: ', author => {
      rl.question('Enter year: ', year => {
        books.push({ id: books.length + 1, title, author, year });
        console.log('Book added successfully.');
        showMenu();
      });
    });
  });
}

function viewBooks() {
  if (books.length === 0) console.log('No books available.');
  else {
    console.log('\nAll Books:');
    books.forEach(b => console.log(`${b.id}. ${b.title} - ${b.author} (${b.year})`));
  }
  showMenu();
}

function searchBook() {
  rl.question('Enter keyword: ', key => {
    const results = books.filter(b => b.title.toLowerCase().includes(key.toLowerCase()) || b.author.toLowerCase().includes(key.toLowerCase()));
    if (results.length === 0) console.log('No matching books found.');
    else results.forEach(b => console.log(`${b.id}. ${b.title} - ${b.author} (${b.year})`));
    showMenu();
  });
}

function deleteBook() {
  rl.question('Enter book ID to delete: ', id => {
    const index = books.findIndex(b => b.id == id);
    if (index === -1) console.log('Book not found.');
    else {
      books.splice(index, 1);
      console.log('Book deleted.');
    }
    showMenu();
  });
}

showMenu();
