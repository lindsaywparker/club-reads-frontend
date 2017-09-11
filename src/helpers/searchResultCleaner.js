const searchResultCleaner = books => (books.map((book) => {
  const avgRating = !book.average_rating[0]._ ? book.average_rating[0] : book.average_rating[0]._;
  return {
    title: book.best_book[0].title[0],
    authors: book.best_book[0].author[0].name[0],
    image_url: book.best_book[0].image_url[0],
    avg_rating: avgRating,
    ratings_count: book.ratings_count[0]._,
    goodreads_id: book.best_book[0].id[0]._,
  };
}));

export default searchResultCleaner;
