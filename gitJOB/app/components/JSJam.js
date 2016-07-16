import React, { Component, PropTypes } from 'react';

import ReactIcon from 'images/tech/react.png'
import Babel from 'images/tech/babel.png'
import Node from 'images/tech/nodeExpress.png'
import Redux from 'images/tech/redux.png'
import MochaChaiIcon from 'images/tech/mochaChai.png'
import Webpack from 'images/tech/webpack.png'
import Jam from 'images/jam.jpg'

import classNames from 'classnames/bind';
import styles from 'css/components/slide.css'
const cx = classNames.bind(styles);

var classNameObject = require('classnames');

class JsJam extends Component {            
    constructor(props) {
      super(props)    
      this.mouseEnter = this.mouseEnter.bind(this)    
      this.state = {                
        explanation: 'Mouseover icons for more (not yet)',          
        photos:  [ ReactIcon, Redux, Node, Webpack, Babel, MochaChaiIcon ],
        tileOver: [false, false, false, false, false, false]
      }      
    }

    mouseEnter(e, mouseIndex){                  
      const newTiles = this.state.tileOver.map((ele, idx) => {
        return mouseIndex === idx
      })
      this.setState = Object.assign(this.state, {
        tileOver: newTiles
      })
    }
    
    render(){          
      const vals = this.state      
      
      return (
        <section className={cx('meta-slide')}>
          <div className={cx('describe')}>
            <h2><span>Javascript is my<img src={Jam}/></span></h2>                
            {vals.explanation}   
          </div>

          <div className={cx('tech-container')}>            
            {vals.photos.map((item, idx) => {            
              console.log(classNames({ 
                    'tile': true, 
                    'tile-over': this.state.tileOver[idx]
                  }))
              return (
                <div key={idx} onMouseEnter={e=> this.mouseEnter(e,idx)} 
                  className={cx(classNames({ 
                    'tile': true, 
                    'tile-over': this.state.tileOver[idx]
                  })
                )}>
                  <img src={item} className={cx('netflix')}/>
                  <div className={cx('layover')}>
                    <div className={cx('descript')}>
                      hello there I am some words and I want to see how much I can say
                    </div>
                  </div>
                </div>
              )}
            )}          
          </div>        
        </section>
    )
  }
}

export default JsJam