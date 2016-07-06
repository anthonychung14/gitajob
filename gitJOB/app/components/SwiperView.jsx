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
import PostGres from 'images/tech/postgres.png'
import MochaChaiIcon from 'images/tech/mochaChai.png'
import Mongo from 'images/tech/mongoDB.png'
import Node from 'images/tech/nodeExpress.png'
import Redux from 'images/tech/redux.png'
import Webpack from 'images/tech/webpack.png'
import Jam from 'images/jam.jpg'


import classNames from 'classnames/bind';
import styles from 'css/components/slide.css'
const cx = classNames.bind(styles);

const buttons = [      
      {
        value: 'Javascript is my', 
        explanation: <img src={Jam}/>,
        more: ['Hover over each icon for details!'],
        photos:  [ <img src={ReactIcon} />, <img src={Redux} />, <img src={Node} />, <img src={Webpack} />, <img src={Babel} />, <img src={MochaChaiIcon} />]
      },
      {
        value: 'I know what makes a productive team', 
        explanation: '',
        more: ['If you empower engineering teams, employ TDD, and champion intentionality, keep going!'],
        photos:  [ <iframe src="http://giphy.com/gifs/vcHTRiZOglHNu/html5" width="480" height="266" frameBorder="0"></iframe>, <iframe src="http://giphy.com/gifs/LyD8urgobi15C/html5" width="480" height="266" frameBorder="0"></iframe> ],
        photoExplain: "If you empower engineering teams, employ TDD, and champion intentionality, keep going!'"
      },
      {
        value: 'Scale and distribution',
        explanation: 'A team that believes',
        more: ['Ask me how I did the following!'],
        photos:  [ <img src={Redis} />, <img src={Elastic} />, <img src={PostGres} />, <img src={Mongo} /> ] 
      },
      {
        value: 'FIYA',
        explanation: 'Zen',
        more: ['Ask me how I did the following!'],
        photos:  [ <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />, <img src={Redis} />]
      },
      {
        value: 'I onboard and contribute quickly',
        explanation: "I possess a track record of success in situations with minimal resourcing and direction",
        more: ['I raised the math pass rate of a 7th grade class from 45% to 92% on state tests', 'I led an effort to secure a three-year, $15M contract with a new client', "I learned an accounting system within one month"],
        photos:  [ ]
      },      
    ]

class SwiperView extends Component {      
  constructor(props) {
    super(props)    
    this.submitFeedback = this.submitFeedback.bind(this)    
  }
  

  submitFeedback(form){                    
    this.props.postFeedback(form)
  }

  renderSlide(ele, idx) {
    return (
      <section key={idx} className={cx('meta-slide')}>
        <div className={cx('describe')}>
          <h2>{ele.value}</h2>                
          {ele.explanation}   
          {ele.more.map((e) => <h4>{e}</h4>)}       
        </div>
        <div className={cx('tech-container')}>            
        {ele.photos.map(item => item)}          
        </div>        
      </section>
    )
  }

  render() {                    
    return (              
      <SwipeableViews
          index={this.props.curr}>
        {buttons.map((ele, idx) => this.renderSlide(ele, idx))}        
        <LandingForm key={5} onSubmit={this.submitFeedback} />
        <div key={6} >
          <h4>Psst...try the icon in the bar nav bar above me</h4>
          <iframe src="http://giphy.com/gifs/xaDTfJ1NmfwB2/html5" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
      </SwipeableViews>      
    )
  }
}
    


export default SwiperView;