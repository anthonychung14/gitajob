import React, { Component, PropTypes } from 'react';
import Jam from 'images/jam.jpg'
import Redis from 'images/tech/redis.png'
import AWS from 'images/tech/aws.jpg'
import Django from 'images/tech/django.jpg'
import Elastic from 'images/tech/elastic.png'
import PostGres from 'images/tech/postgres.png'
import Mongo from 'images/tech/mongoDB.png'

import Accenture from 'images/accenturelogo.png'
import USAFA from 'images/usafalogo.jpeg'
import TFA from 'images/tfalogo.jpg'

import Teamwork from 'images/teamwork.gif'
import Cat from 'images/cattyping.gif'
import Haha from 'images/haha.gif'
import Face from 'images/arrowtoFace.gif'
import ReactIcon from 'images/tech/react.png'
import Babel from 'images/tech/babel.png'
import Node from 'images/tech/nodeExpress.png'
import Redux from 'images/tech/redux.png'
import MochaChaiIcon from 'images/tech/mochaChai.png'
import Webpack from 'images/tech/webpack.png'

import TiSocial from 'react-icons/lib/ti/social-linkedin'
import TiChartLine from 'react-icons/lib/ti/chart-line'
import TiUserAdd from 'react-icons/lib/ti/user-add'

import StartupYou from 'images/startupyou.png'

import classNames from 'classnames/bind';
import styles from 'css/components/tab-view.css'
const cx = classNames.bind(styles);


import ShowMe from 'images/showmewhatyougot.gif'
import FeedbackForm from 'components/FeedbackForm'


const slides = [
{
  claim: 'Want to get in touch? This app will text me if you fill out the below box',
  picture: Jam,
  warrants: [  
  {
    hover: <div className={cx('icon-bar')}><TiSocial/></div>,
    explanations: {
      name: <div>Consider<span><img src={StartupYou}/></span>by the LinkedIn co-founders</div>,
      descript: [        
        <div>Recruiters have to quickly determine technical quality and fit from large pools of candidates</div>,
        <div>You might call us startups, since we're asking you to invest your time (the most valuable resource)</div>,                        
        <div>This single-page application (within another app haha) is my way of asking you to invest in me</div>,        
        <div>Start by hovering over the beige icons!</div>        
      ]
    }
  },

  {
    hover: <div className={cx('icon-bar')}><TiChartLine/></div>,
    explanations: {
      name: "To recruiters, engineers, managers",
      descript: [                
        "I invite a conversation on any of the topics listed in the following slides",
        "They indicate I can speak to my professional experience, challenges, and lessons around it",
        "If you think we'd make a sound technical/cultural fit, I'd love to contribute to your team ",
        <div>
          <h5>Food for thought</h5>
          <h5>Y-Combinator founder Paul Graham wrote <span><a href="http://www.paulgraham.com/growth.html">about why growth matters</a></span></h5>
          <h5>TripleByte publishes <span><a href="http://blog.triplebyte.com/bootcamps-vs-college">study on bootcamp grads vs CS majors</a></span></h5>
          <h5>StackOverflow finds <span><a href="http://blog.triplebyte.com/bootcamps-vs-college">majority of developers are self-taught</a></span></h5>
        </div>
      ]
    }
  },
  
   {
    hover: <div className={cx('icon-bar')}><TiUserAdd/></div>,
    explanations: {
      name: "TLDR: Here's my value-add",
      descript: [        
        <div className={cx('gif-collection')}>
        <div className={cx('gif-caption')}><div>Awesome teamwork</div><iframe src={Teamwork} width="400" height="250" frameBorder="0" allowFullScreen/></div>
        <div className={cx('gif-caption')}>JavaScript is my<span><img src={Jam}/></span></div>
        <div className={cx('gif-caption')}><div>Contagious enthusiasm</div><iframe src={Cat} width="400" height="250" frameBorder="0"/></div>
        </div>
      ]
    }
  }
  ]
},
{
  claim: 'If not this, maybe the circus. Somebody stop me',
  picture: Jam,
  warrants: [{
    hover: <img src={USAFA} className={cx('photo-image')}/>,
    explanations: {
      name: 'Air Force',
      descript: [
      'Shaved my head and marched in the desert', 
      'Leadership over both squadron and cadet-wing', 
      'Jumping out of airplanes', 
      'An actual bootcamp (lol)'
      ]
    }
  },
  {
    hover: <img src={TFA} className={cx('photo-image')}/>,
    explanations: {
      name: '7th grade teacher',
      descript: [
      'Oakland Charter Academy - Five subjects to a 26-student class', 
      'Made bootcamp look like summer camp',
      'Teaching and developing a growth-mindset',      
      'Empathetic communication', 
      'Students crush state tests with some of the highest pass rates in district (96% math)',
      ]
    }
  },
  {
    hover: <img src={Accenture} className={cx('photo-image')}/>,
    explanations: {
      name: 'Management Consulting',
      descript: [
      'Learning fund accounting, client software, and operations in two weeks',       
      'Programmed scripts in Microsoft Visual Basic to automate trading tasks', 
      'Management team for thirty-person outsourcing operation', 
      'Delivered on multiple daily trading deadlines', 
      'Developed training and onboarding program for engagement'
      ]
    }
  }]
},

{
  claim: 'Love the craft, need the rent',
  picture: Jam,
  warrants: [ 
  {
    hover: <img src={ReactIcon} className={cx('photo-image')}/>, 
    explanations: {
      name: 'React',
      descript: [
        'I built this single-page application (and four others) using React',
        "I can talk to you about tradeoffs with Angular/Angular 2/Backbone/Ember", 
        'I have experienced the benefits/roadblocks around isomorphic JavaScript'
      ]
    }
  }, 
  {
    hover: <img src={Redux} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Redux',
      descript: [
        'Three apps in Redux (including this one)', 
        'Thinking about how to to best design state trees in complicated apps', 
        'I Love maximizing performance of Redux (and any other tech really)'
      ]
    }
  }, 
  {
    hover: <img src={Node} className={cx('photo-image')}/>, 
    explanations: {
      name: 'API Design',
      descript: [
      'Practical and academic experience with a RESTful API and its importance', 
      'Data modeling and schema design', 
      'Leveraging streams and observables with functional programming'
      ]
    }
  }, 
  {
    hover: <img src={Webpack} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Build tools',
      descript: [
       'Connecting Webpack with Python/Django. Because reasons', 
       'Comparison with other build tools Browserify, Gulp, and Grunt', 
       'Modularizing CSS loaders to optimize load-times'
       ]
    }
  }, 
  {
    hover: <img src={Babel} className={cx('photo-image')}/>, 
    explanations: {
      name: 'ES2015',
      descript: [
        'Generators / Redux Sagas', 
        'New data structures in ES2015', 
        'Changes to common code structures', 
        'Implementation of classes (Classical vs. Prototypal)'
      ]
    }
  }, 
  {
    hover: <img src={MochaChaiIcon} className={cx('photo-image')}/>, 
    explanations: {
      name: 'TDD',
      descript: [
      'Python - Nose to test API logic and unit test', 
      'Node/React/Redux - unit/component/reducer testing', 
      'Either - Seleneium to mock user flow/auth for integration testing'
      ]
    }
  }
  ]
},
{
  claim: "Ask me about my side-projects",
  picture: Jam,
  warrants: [
  {
    hover: <img src={Redis} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Redis',
      descript: ['Caching', 'Redis queue + Scrapy for distributed web-crawling', 'Redis vs. Memcached', 'Redis as LRU Cache']
    }
  }, 
  {
    hover: <img src={AWS} className={cx('photo-image')}/>, 
    explanations: {
      name: 'AWS',
      descript: ['EC2 deployment', 'S3 upload from Python scripts and MongoDB', 'Cloudfront distribution with Nginx load balancing']
    }
  }, 
  {
    hover: <img src={Django} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Python/Django',
      descript: ['Pandas', 'Web-crawling', 'Django ORM', 'Django vs. Flask vs. Pyramid', 'HTML templating']
    }
  }, 
  {
    hover: <img src={Elastic} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Elastic',
      descript: ['Uses', 'Pros/Cons', 'Recommendation systems', 'Query language', 'Frameworks and libraries']
    }
  }, 
  {
    hover: <img src={PostGres} className={cx('photo-image')}/>, 
    explanations: {
      name: 'PostgreSQL',
      descript: ['Common SQL and Joins', 'Scaling SQL', 'Optimizing SQL queries']
    }
  }
  , 
  {
    hover: <img src={Mongo} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Mongo',
      descript: ['Benefits vs noSQL', 'Sharding, clustering', 'MapReduce', 'Aggregation']
    }
  }
  ]
},

{
  claim: 'Drop me a line!',
  picture: Jam,
  warrants: [
    {
      hover: <iframe src={ShowMe} width="480" height="301" frameBorder="0" allowFullScreen></iframe>,
      explanations: {
        name: <FeedbackForm />,
        descript: []
      }
    }  
  ]
}    
] 

export default slides

// "http://www.paulgraham.com/growth.html"
