import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import TabView from 'containers/TabView'
import slides from 'data/recruiterData'

import classNames from 'classnames/bind';
import styles from 'css/components/slide.css'
const cx = classNames.bind(styles);

class SwiperView extends Component {      
  constructor(props) {
    super(props)    
    this.submitFeedback = this.submitFeedback.bind(this)    
  }
  
  submitFeedback(form){                    
    this.props.postFeedback(form)
  }

  render() {                    
    return (              
      <SwipeableViews
          style={style} 
          index={this.props.curr}>        
        {slides.map((ele, idx) => {
          return (
            <TabView 
              key={idx} index={idx} 
              calcScore={this.props.calcScore} onSubmit={this.submitFeedback}/>
          )}
        )}        
      </SwipeableViews>      
    )
  }
}

const style = {
  minHeight: '65vh'
}

export default SwiperView;