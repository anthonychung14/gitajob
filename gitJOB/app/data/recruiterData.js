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

import classNames from 'classnames/bind';
import styles from 'css/components/tab-view.css'
const cx = classNames.bind(styles);


import ShowMe from 'images/showmewhatyougot.gif'
import FeedbackForm from 'components/FeedbackForm'


const slides = [
{
  claim: 'Contact me to help you grow your platform!',
  picture: Jam,
  warrants: [ 
  {
    hover: <img src={ReactIcon} className={cx('photo-image')}/>, 
    explanations: {
      name: 'React',
      descript: [
        'This app is in React/Redux',
        "React's tradeoffs with Angular/Angular 2/Backbone/Ember", 
        'Benefits/roadblocks around isomorphic JavaScript'
      ]
    }
  }, 
  {
    hover: <img src={Redux} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Redux',
      descript: [
        'Why I chose Redux over other implementations', 
        'How to leverage other libraries to handle an expanding state tree', 
        'How to maximize the performance of Redux applications'
      ]
    }
  }, 
  {
    hover: <img src={Node} className={cx('photo-image')}/>, 
    explanations: {
      name: 'API Design',
      descript: [
      'Anatomy of a RESTful API and its importance', 
      'Data modeling and schema design', 
      'Streams and observables as a tool for async'
      ]
    }
  }, 
  {
    hover: <img src={Webpack} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Build tools',
      descript: [
       'Connecting Webpack to Python/Django', 
       'Comparison with Browserify, Gulp, and Grunt', 
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
      'Python - using Nose to test API logic', 
      'Node/React - unit testing', 
      'Either - Seleneium to mock user flow/auth/etc.'
      ]
    }
  }
  ]
},
{
  claim: 'I have implemented training programs, managed teams, and worked with peers and management',
  picture: Jam,
  warrants: [{
    hover: <img src={USAFA} className={cx('photo-image')}/>,
    explanations: {
      name: 'Air Force',
      descript: [
      'Military academy', 
      'Leadership over squadron and cadet-wing', 
      'Discipline', 
      'lol, actual bootcamps']
    }
  },
  {
    hover: <img src={TFA} className={cx('photo-image')}/>,
    explanations: {
      name: '7th grade teacher',
      descript: [
      'Charter school (they loved the military)', 
      'Five subjects to a 26-student class', 
      'The growth-mindset', 
      'Empathy and social justice', 
      'Doubling the math state test pass-rate'
      ]
    }
  },
  {
    hover: <img src={Accenture} className={cx('photo-image')}/>,
    explanations: {
      name: 'Management Consulting',
      descript: [
      'Learning accounting and accounting software in one week', 
      'Programmed scripts in Microsoft Visual Basic', 
      'Management team for thirty-person operation', 
      'Delivered on multiple daily deadlines.', 
      'Built on clear communication from teaching'
      ]
    }
  }]
},
{
  claim: "I love to learn. We would get along if you do too!",
  picture: Jam,
  warrants: [
  {
    hover: <img src={Redis} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Redis',
      descript: ['Caching', 'Queue management with Scrapy']
    }
  }, 
  {
    hover: <img src={AWS} className={cx('photo-image')}/>, 
    explanations: {
      name: 'AWS',
      descript: ['EC2', 'S3', 'Cloudfront']
    }
  }, 
  {
    hover: <img src={Django} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Python/Django',
      descript: ['Pandas', 'Web-crawling', 'Django ORM', 'Django vs. Flask vs. Pyramid']
    }
  }, 
  {
    hover: <img src={Elastic} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Elastic',
      descript: ['Uses', 'Pros/Cons', 'Recommendation systems', 'Language', 'Frameworks and ecosystem']
    }
  }, 
  {
    hover: <img src={PostGres} className={cx('photo-image')}/>, 
    explanations: {
      name: 'PostgreSQL',
      descript: ['Common SQL and Joins', 'Scaling SQL']
    }
  }
  , 
  {
    hover: <img src={Mongo} className={cx('photo-image')}/>, 
    explanations: {
      name: 'Mongo',
      descript: ['Benefits vs noSQL', 'Sharding, clustering', 'MapReduce']
    }
  }
  ]
},

{
  claim: 'Talk to me about my side-projects (both recent and in-progress)!',
  picture: Jam,
  warrants: [  
  {
    hover: <div className={cx('icon-bar')}><TiSocial/></div>,
    explanations: {
      name: "We are all startups",
      descript: [
        <div>Founder of LinkedIn wrote a book on this very topic</div>,
        <div>"The fastest way to change yourself is to hang out with people who are already the way you want to be."</div>,
        <div>"No matter how brilliant your mind or strategy, if you’re playing a solo game, you’ll always lose out to a team."</div>,
      ]
    }
  },

  {
    hover: <div className={cx('icon-bar')}><TiChartLine/></div>,
    explanations: {
      name: "Why growth is important ",
      descript: [
        'If you want to understand startups, understand growth. Growth drives everything in this world. Growth is why startups usually work on technology—because ideas for fast growing companies are so rare that the best way to find new ones is to discover those recently made viable by change, and technology is the best source of rapid change.',
        'Understanding growth is what starting a startup consists of',
        'So important, in fact, that I said this other thing too'
      ]
    }
  },
  
   {
    hover: <div className={cx('icon-bar')}><TiUserAdd/></div>,
    explanations: {
      name: "TLDR: Here's what I add",
      descript: [        
        <div className={cx('gif-caption')}><div>Awesome team powers</div><iframe src={Teamwork} width="400" height="250" frameBorder="0" allowFullScreen/></div>,
        <div className={cx('gif-caption')}>JavaScript is my<span><img src={Jam}/></span></div>,
        <div className={cx('gif-caption')}><div>I make the haha</div><iframe src={Haha} width="400" height="250" frameBorder="0" allowFullScreen/></div>,
      ]
    }
  }
  ]
},
{
  claim: 'Look forward to chatting!',
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
