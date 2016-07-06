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
import TypeScript from 'images/tech/typescript.png'
import Skydive from 'images/skydive.gif'


import classNames from 'classnames/bind';
import styles from 'css/components/slide.css'
const cx = classNames.bind(styles);

const javaJam = () => {
  return (
    <span>Javascript is my<img src={Jam}/></span>
  )
}

const buttons = [      
      { value: "Psst...try the icon in the bar nav bar above me",
        explanation: '',
        more: [],
        photos: [ <iframe src="http://giphy.com/gifs/xaDTfJ1NmfwB2/html5" width="480" height="362" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>]

      },
      {
        value: javaJam(), 
        explanation: 'Mouseover icons for more (not yet)',
        more: [],
        photos:  [ <img src={ReactIcon} />, <img src={Redux} />, <img src={Node} />, <img src={Webpack} />, <img src={Babel} />, <img src={MochaChaiIcon} />]
      },
      {
        value: 'Ideal characteristics:', 
        explanation: '',
        more: ['Strong stake in product', 'Iterate blazingly fast', 'Relentlessly automate', 'Experiment, fail, learn'],
        photos:  [ <iframe src="http://giphy.com/gifs/vcHTRiZOglHNu/html5" width="480" height="266" frameBorder="0"></iframe>, <iframe src="http://giphy.com/gifs/LyD8urgobi15C/html5" width="480" height="266" frameBorder="0"></iframe> ],
      },
      {
        value: <p>I care deeply about the product's growth and vision<br/><br/>This might involve...</p>,
        explanation: '',
        more: ['Weighing tradeoffs between technologies', 'Choosing scalable solutions', 'Creating the right tools in-house', 'Yes. This includes doing customer support.'],
        photos:  [ <img src={Redis} />, <img src={Elastic} />, <img src={PostGres} />, <img src={Mongo} />, <img src={TypeScript} /> ] 
      },      
      {
        value: 'I have thrived across high-stakes environments with minimal resourcing and direction',
        explanation: "",
        more: ["Solo skydive 5x in 2 weeks with 4 days of training", "Learned client's investment accounting system w/in one week","Mastered it to become subject-matter expert in 3 months", "Plot twist. Not an accountant", "Drove 7th grade classroom to double their state test pass scores in math (1 yr)"],
        photos:  [ <iframe src={Skydive} width="480" height="266" frameBorder="0"></iframe> ]
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
          {ele.more.map((e) => <h4 className={cx('team-values')}>{"• " + e}</h4>)}       
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
      </SwipeableViews>      
    )
  }
}
    


export default SwiperView;