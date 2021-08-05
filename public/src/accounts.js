const { getBooksBorrowedCount } = require("./home");

function findAccountById(accounts, id) {

  return accounts.filter((account) => {
    account.id === id
    return account
  }).find((account) => account.id === id);
  console.log(account)
}

function sortAccountsByLastName(accounts) {
  accounts.sort((account1, account2) => account1.name.last > account2.name.last) ? 1 : -1
  return accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    let borrowed = (books[i].borrows)
    for (let j = 0; j < borrowed.length; j++) {
      let eachBorrow = borrowed[j];
      console.log(eachBorrow)
      if (eachBorrow.id === account.id) {
        total++
      }
    }
  }
  return total;
}
//helper function that return author
function getAuthor(book, authors) {
  return authors.find((author) => author.id === book.authorId)
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });
  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
