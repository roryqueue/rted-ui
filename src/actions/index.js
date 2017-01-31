export function selectBook(book) {
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
