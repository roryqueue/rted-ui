import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'
import MetricList from '../containers/metric_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
        <MetricList />
      </div>
    )
  }
}
