import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'Redux'

class MetricList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      metrics: []
    };
  }

  getMetricList() {
    const baseApiUrl = 'http://localhost:3333/'
    fetch(baseApiUrl)
      .then(response => response.json())
      .then(response => response.map((metric) => metric.name))
      .then(response => this.setState({ metrics: response }))
  }

  componentDidMount() {
    this.getMetricList();
  }

  renderList() {
    return this.state.metrics.map((metric, index) => {
      return (
        <li key={index}>{metric}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    metrics: state.metrics
  }
}

// Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({}, dispatch)
}

// Propmote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(MetricList)
