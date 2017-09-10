const searchResultCleaner = books => (books.map(book => (
  {
    title: book.best_book[0].title[0],
    authors: book.best_book[0].author.map(person => person.name[0]),
    image_url: book.best_book[0].image_url[0],
    avg_rating: book.average_rating[0],
    ratings_count: book.ratings_count[0]._,
  }
)));

export default searchResultCleaner;
