import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'
import SelectedMetric from './reducer_selected_metric'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  selectedMetric: SelectedMetric
})

export default rootReducer
