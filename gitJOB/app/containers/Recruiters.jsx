import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { postFeedback } from 'actions/feedback'

import ProblemSolution from 'components/ProblemSolution'
import SwiperView from 'components/SwiperView'

//CSS/IMG
import classNames from 'classnames/bind';
import styles from 'css/components/recruiters.css'
import styles2 from 'css/components/about.css'
import Anthony from 'images/anthony.jpg'
import FaBolt from 'react-icons/lib/fa/bolt'
import FaGithubAlt from 'react-icons/lib/fa/github-alt'
import FaRocket from 'react-icons/lib/fa/rocket'
import TiCode from 'react-icons/lib/ti/code'
import TiHeart from 'react-icons/lib/ti/heart'
import GoFlame from 'react-icons/lib/go/flame'


const cx = classNames.bind(styles);
const buttons = [
  {
    id: 0,
    title: 'Gogogo',
    icon: <FaBolt />,
    color: '#000',
    seen: true,
    overlay: 'Rapid Onboarding'
  },
  {
    id: 1,
    title: 'Srs skillz',
    icon: <TiCode />,
    color: '#2196F3',
    seen: false,
    overlay: 'Technical'
  }, 
  {
    id: 2,
    title: 'Autonomous',
    icon: <FaGithubAlt />,
    color: '#2196F3',
    seen: false,
    overlay: 'Autodidact, automatic'
  }, 
  {
    id: 3,
    title: 'Mission',
    icon: <FaRocket />,
    color: '#2196F3',
    seen: false,
    overlay: 'Believe in the product'
  },  
  {
    id: 4,
    title: 'FIYA',
    icon: <GoFlame />,
    color: '#2196F3',
    seen: false,
    overlay: 'Why'
  },  
]

//Assets

class Recruiters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 0,      
      count: 0,
      seen: [],
      bgColor: {blue: '#2196F3', black: '#000', pink: '#f22195'},
      buttons       
    }
    this.changeView = this.changeView.bind(this)
    this.handlePush = this.handlePush.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  componentDidMount() {    
    const icons = this.refs.pushHandler.children
    this.refs.pushHandler.addEventListener('mouseover', this.handlePush)    
    for (var i  = 0; i < icons.length; i++) {
      icons[i].addEventListener('mouseover', this.handlePush)
    }    
    console.log(this.refs.pushHandler, "inside compdidMount")      

  //   window.addEventListener('mouseout', function() {
  //     for (var i = 0; i < buttons.length; i++) {
  //       var button = buttons[i];
  //       button.classList.remove('shiftDown');
  //     }
  // });
  }

  componentWillUnmount() {
    // window.removeEventListener('mouseover', this.handlePush)
  }

  handlePush(event) {
    console.log("handle push event")
    
    //will need to do something to the target classlist, need to either pass the object in or refer to it in the event object

  }

  handleMove(e, index){
    const allIcons = this.refs.pushHandler.childNodes
    allIcons.forEach((ele, i) => {
      //i > index ? ele.classList.add('shiftDown') : ele.classList.add('shiftUp')
      if (index !== i) { ele.classList.add('shiftUp')}
    })
    console.log("handled the MUP, ")
  }

  changeView(event, text, idx) {                    
    let buttons = this.state.buttons.slice(0)
    let prior = this.state.buttons[this.state.curr]
    let current = this.state.buttons[idx]

    if (prior !== current) {        
      buttons[idx].color = this.state.bgColor['black']
      buttons[this.state.curr].color = this.state.bgColor['blue']

      this.setState(Object.assign({}, this.state, {
        count: 4,
        curr: idx,
        buttons
      }))
    }    
  }

  sendContact(e) {            
    let that = this        
    let count = 5
    let bar = genAsync()
    let time = 650          
    
    function* genAsync() {                                                  
      while(count > 0) {        
        count--
        yield asyncFill(count, function() {                                      
          that.setState({
            'count': count,             
          }, bar.next(count).value)
        })
      }
    }        
    
    function asyncFill(count, cb) {          
      let buttons = that.state.buttons.slice(0)
      buttons[count].color = that.state.bgColor['pink']
            
      setTimeout(function() {                                                
        that.setState(Object.assign({}, this.state, {
          buttons           
        }, cb(count)
        ))
      }, time *= .9)                                                                
    }
    bar.next(count).value()
  }

  renderAll(ele, index) {                    
    return (         
     <section key={index} className={cx('column')}          
        style={{ backgroundColor: ele.color}} 
        onMouseEnter={ (e) => this.handleMove(e, index)} 
        onClick={val => this.changeView(val, ele, index)}>                
      {ele.icon}
      {ele.title}
    <div className={cx('overlay')}>
        {ele.overlay}
    </div>             
    </section>          
   )
  }             
            
  render() { 
    const buttons = this.state.buttons
    return (
      <section>
        <div className={cx("hero-summary")}>
          <h4 className={cx("display-4")}>Thanks for stopping by!</h4>           
        </div>
    
        <div className={cx('hero-content')}>
          <div className={cx('profile')}>            
            <h4>Who</h4>
            <img src={Anthony} />
            <h4>Anthony Chung</h4>
            <h6>Work Experience</h6>
            <h5>Accenture | Teach For America</h5>
            <h6>Alma Mater</h6>
            <h5>Rice University | US Air Force</h5>
            <h6>Contact</h6>
            <h5>anthonychung14@gmail.com</h5>
          </div>
          
          <div className={cx("swipe-view")}>
            <SwiperView curr={this.state.curr}/>          
          </div>                  
          
          <div className={cx("intro-para")}>
              <h4>Why</h4>
              <div ref="pushHandler" className={cx('why-me')}>
              {buttons.map((ele, index) => {
                return this.renderAll(ele, index)})}    
              </div>
              
              <div className={cx('contact')} onClick={this.sendContact.bind(this)}>
                <TiHeart/>              
                <h4>Contact</h4>              
              </div>            
            
          </div>
        </div>

        <div className={cx("hero-summary")}>
          <h4 className={cx("display-4")}>Thanks for stopping by my meta-application!</h4>          
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
  { })(Recruiters);