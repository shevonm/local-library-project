function findAuthorById(authors, id) {
  for (const author of authors) {
    if (author.id === id) {
      return author
    }
  }

}

function findBookById(books, id) {
  for (const book of books) {
    if (book.id === id) {
      return book
    }
  }


}
// not currently working
function partitionBooksByBorrowedStatus(books) {
  return books.reduce( (a, c) => { a[+(c.borrows[0] && c.borrows[0].returned)].push(c); return a }, [[],[]] )
  
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
