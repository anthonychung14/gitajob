import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import LandingForm from 'components/LandingForm'
import FeedbackForm from 'components/FeedbackForm'

import Redis from 'images/redis.png'

import classNames from 'classnames/bind';
import styles from 'css/components/slide.css'
const cx = classNames.bind(styles);


class SwiperView extends Component {      
  constructor(props) {
    super(props)    
  }

  render() {        
    const buttons = [
      {
        value: '1. Ready to hit the ground running yesterday',
        explanation: 'Two warrants: History and technology',
        more: '',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      },
      {
        value: 'Technical skills', 
        explanation: 'Here are problems, big and small, that I have either solved, prototyped, or thought really long and hard about.',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      },
      {
        value: 'Teamwork', 
        explanation: 'Zen',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      },
      {
        value: 'I Dream',
        explanation: 'A team that believes',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />] 
      },
      {
        value: 'FIYA',
        explanation: 'Zen',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      }      
    ]

    return (        
      <section className='meta-app'>
      <SwipeableViews
          index={this.props.curr}>
        {buttons.map((ele, idx) => {
          return (
            <div key={idx} className='slide'>
              <div className='describe'>
                <h2>{ele.value}</h2>
                <h2>{ele.explanation}</h2>          
              </div>

              <div className={cx('tech-container')}>            
                {ele.photos.map(item => item)}          
              </div>          
            </div>       
          )}
        )}
        <LandingForm />
      </SwipeableViews>
      </section>
    )
  }
    
}



function mapStateToProps(state) {
  return {    
  };
}
export default connect(mapStateToProps, 
  { })(SwiperView);