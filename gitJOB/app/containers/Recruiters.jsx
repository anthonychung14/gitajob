import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { postFeedback } from 'actions/feedback'

import SwiperView from 'components/SwiperView'

//CSS/IMG
import classNames from 'classnames/bind';
import styles from 'css/components/recruiters.css'
import styles2 from 'css/components/about.css'
import Anthony from 'images/anthony2.jpg'
import FaBolt from 'react-icons/lib/fa/bolt'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaRocket from 'react-icons/lib/fa/rocket'
import TiCode from 'react-icons/lib/ti/code'
import TiHeart from 'react-icons/lib/ti/heart'
import TiArrowRightThick from 'react-icons/lib/ti/arrow-right-thick'

import slides from 'data/recruiterData'

const cx = classNames.bind(styles);
const buttons = [ 
  {
    id: 0,
    title: 'Start',
    icon: <TiArrowRightThick />,
    color: '#f22195',
    seen: true,    
    header: 'WELCOME TO WHY YOU SHOULD HIRE ME' 
  },
  {
    id: 1,
    title: 'Change',
    icon: <FaBolt />,
    color: '#2196F3',
    seen: true,    
    header: 'We are all investors in an entrepreneur-economy' 
  },     
  {
    id: 2,
    title: 'Team',
    icon: <FaGithubAlt />,
    color: '#2196F3',
    seen: false,    
    header: "I bring a diverse background of professional experience"
  }, 
  {
    id: 3,
    title: 'Skills',
    icon: <TiCode />,
    color: '#2196F3',
    seen: false,    
    header: 'I have specialized and will contribute fastest in these'
  }, 
  {
    id: 4,
    title: 'Scale',
    icon: <FaRocket />,
    color: '#2196F3',
    seen: false,    
    header: 'Since finishing Hack Reactor in February, I have built on my skills with these'
  },      
  {
    id: 5,
    title: 'Connect',
    color: '#2196F3',
    seen: false,
    icon: <TiHeart />,
    header: "Your feedback will help me improve"
  },  
]

// const countScores = slides
// .map((prev, curr) => {
//   return curr.warrants
//   .reduce((p, c) => {
//     if (curr.indexOf(c)) {

//     }
//     return p
//     }, 
//     {
//       seenOnSlide: [],  
//       totalSlide: curr.warrants.length
//     })  
//   })

class Recruiters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 0,      
      count: 0,
      score: 0,
      seen: {},
      bgColor: {blue: '#2196F3', black: '#000', pink: '#f22195'},
      buttons       
    }
    this.changeView = this.changeView.bind(this)
    this.calcScore = this.calcScore.bind(this)
  }

  calcScore() {
    let newScore = this.state.score
    newScore += 1
    this.setState(Object.assign({}, this.state, {               
        score: newScore
      }))  
  }

  changeView(event, text, idx) {                    
    let buttons = this.state.buttons.slice(0)
    let prior = this.state.buttons[this.state.curr]
    let current = this.state.buttons[idx]
    
    let newTabs = Object.assign({}, this.state.seen)
    newTabs[idx] = idx

    if (prior !== current) {        
      buttons[idx].color = this.state.bgColor['pink']
      // buttons[this.state.curr].color = this.state.bgColor['blue']

      this.setState(Object.assign({}, this.state, {
        count: 4,        
        curr: idx,
        seen: newTabs,
        buttons
      }))
    }    
  }

  renderAll(ele, index) {                    
    const renderTitle = (idx) => {
      if (this.state.curr === idx || this.state.seen[idx]) {
        return (
          <div>
          <h4><TiArrowRightThick/></h4>          
          </div>
        )
      } else {                
        return (
          ele.icon
        )
      }
    }
    return (              
     <div>
       <section key={index} className={cx('column')}          
          style={{ backgroundColor: ele.color}} 
          onClick={val => this.changeView(val, ele, index)}>                                
          {renderTitle(index)}        
          <div className={cx('overlay')}>                  
            <h4>{ele.title}</h4>
          </div>                         
      </section>          
    </div>
   )
  }             
            
  render() { 
    const buttons = this.state.buttons
    return (
      <section>
        <div className={cx("hero-summary")}>
          <h4 className={cx("display-4")}>{buttons[this.state.curr]['header']}</h4>           
        </div>
    
        <div className={cx('hero-content')}>                          
          <div className={cx('right-content')}>
          <div className={cx('mini-nav')}>           
              <div ref="pushHandler" className={cx('why-me')}>
                {buttons.map((ele, index) => this.renderAll(ele, index))}                  
              </div>                                                                    
          </div>
          <div className={cx("swipe-view")}>            
            <SwiperView 
              postFeedback={this.props.postFeedback}
              calcScore={this.calcScore}
              curr={this.state.curr}/>                      
          </div>                                                
        </div>
        <div className={cx('profile')}>            
            <h2>Anthony Chung</h2>
            <img src={Anthony} />
            <h4>Upcoming Features</h4>                        
            <h5>Data visualization | <span><a href="https://www.wealthfront.com/engineering">like this</a></span></h5>
            <h5>Non-negative matrix factorization | <span><a href="http://web.stanford.edu/class/ee378b/papers/xu-lin-gong-nmf.pdf">paper</a></span></h5>
            <h5>Kafka + Redis + Scrapy | <span><a href="http://scrapy-cluster.readthedocs.io/en/latest/">library</a></span></h5>
            <h5>Continuous integration => 'Deploy button'</h5>                          
            <h5>Super Secret Recruiter Feature</h5>                          
          </div>
        </div>
      </section>    
    )
  }
}
  
function mapStateToProps(state) {
  return {
    
  };
}

export default connect(mapStateToProps, 
  { postFeedback })(Recruiters);

  // <h5>Many lines</h5>
  //           <h5>Maybe haiku</h5>
  //           <h5>Mouseover the icons</h5>            
  //           <h5>It's a bad haiku</h5>            
  //           <h5>Disguised as game instructions</h5>
  //           <h5>Whoa</h5>
  //           <h5>{this.state.score + ' / ' + slides.reduce((prev, curr) => {
  //             return prev += curr.warrants.length
  //           }, 0)}</h5>                                                