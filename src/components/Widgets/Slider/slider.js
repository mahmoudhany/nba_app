import React, { Component } from 'react';
import { getData } from '../../../API/fetch'
//components
import SliderTemplates from './sliderTemplates'
import { URL } from '../../../config'

class Slider extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    getData(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
      .then(data => this.setState({
        data: data
      }))
  }
  render() {
    return (
      <div>
        <SliderTemplates
          data={this.state.data}
          type={this.props.type}
          settings={this.props.settings}
        />
      </div>
    );
  }
}

export default Slider;
