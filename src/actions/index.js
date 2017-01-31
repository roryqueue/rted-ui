export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export function selectMetric(metric) {
  return {
    type: 'METRIC_SELECTED',
    payload: metric
  }
}
