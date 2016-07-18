import React, { Component, PropTypes } from 'react';
import LandingForm from 'components/LandingForm'

import classNames from 'classnames/bind';
import styles from 'css/components/tab-view.css'
const cx = classNames.bind(styles);

import slides from 'data/recruiterData'

class TabView extends Component {            
    constructor(props) {
      super(props)    
      this.mouseEnter = this.mouseEnter.bind(this)    
      this.state = {                
        hover: false,        
        activeIndex: 0                   
      }      
    }

    mouseEnter(e, mouseIndex){                        
      this.props.calcScore()
      const hover = Object.assign({}, this.state, {
        hover: !this.state.hover,
        activeIndex: mouseIndex
      })      
      this.setState(hover)
    }

    mouseLeave(e, mouseIndex) {
     const hover = Object.assign({}, this.state, {
        hover: false,        
      })      
      this.setState(hover) 
    }
    
    render(){          
      const currentSlide = slides[this.props.index]
      const claim = currentSlide.claim
      const claimPicture = currentSlide.picture
      const warrants = currentSlide.warrants
      
      const activeName = warrants[this.state.activeIndex].explanations.name
      const activeDescript = warrants[this.state.activeIndex].explanations.descript
            
      return (
        <section className={cx('meta-slide')}>
          <div className={cx('top-half')}>
            <div className={cx('tech-container')}>            
              {warrants.map((item, idx) => {                          
                return (
                  <div 
                    key={idx} 
                    className={cx('photo-tile')}                    
                    onMouseEnter={e => this.mouseEnter(e, idx)}
                    onMouseLeave={e => this.mouseLeave(e, idx)}>
                    {item.hover}
                  </div>
                )}
              )}
            </div> 

            <div className={cx('layover')}>                                        
              <div className={cx('layover-header')}>{activeName}</div>
              <ul className={cx('layover-text')}>{activeDescript.map((ele,idx) => {
                return (
                  <li>{ele}</li>
                )
              }
              )}</ul>                                                    
            </div>
          </div>
                    
          <div className={cx('head-container')}>
            <h4>{claim}</h4>
            <LandingForm onSubmit={this.props.onSubmit}/>            
          </div>                         
        
        </section>
    )
  }
}

export default TabView