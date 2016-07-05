import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';

import LandingForm from 'components/LandingForm'
import FeedbackForm from 'components/FeedbackForm'

import Redis from 'images/tech/redis.png'
import ReactIcon from 'images/tech/react.png'
import AWS from 'images/tech/aws.jpg'
import Babel from 'images/tech/babel.png'
import Django from 'images/tech/django.jpg'
import Elastic from 'images/tech/elastic.png'
import MochaChaiIcon from 'images/tech/mochaChai.png'
import Mongo from 'images/tech/mongoDB.png'
import MochaChai from 'images/tech/mochaChai.png'
import Node from 'images/tech/nodeExpress.png'
import PostGres from 'images/tech/postgres.png'
import Webpack from 'images/tech/webpack.png'


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
    const buttons = [
      {
        value: 'Here are examples of problems I can solve',
        explanation: 'Two warrants: History and technology',
        more: '',
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      },
      {
        value: 'Technical skills', 
        explanation: 'Preferred dev stack for full stack JS',
        photos:  [ <img src={ReactIcon} />, <img src={Node} />, <img src={Mongo} />, <img src={Webpack} />, <img src={Babel} />]
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
        <LandingForm key={5} onSubmit={this.submitFeedback} />
      </SwipeableViews>
      </section>
    )
  }
    
}

export default SwiperView;