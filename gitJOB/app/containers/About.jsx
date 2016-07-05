import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';
const cx = classNames.bind(styles);

import Features from 'components/Features'

class About extends Component {
  submitFeedback(form){                    
    this.props.postFeedback(form)
  }

  render() {
    return(    
      <section className={cx('about-container')}>        
        <div className={cx("hero-img-banner")}>         
          <h1 key="1" className={cx("display-4")}>
            Simplify your pipeline, applications, and interviews
          </h1>
        </div>     
        
        <div className={cx("hero-img")}>                    
          <Features/>          
        </div>              
      </section>

    );    
  }
};


About.propTypes = {
  
};

// <video width="100%" height="auto" autoPlay muted loop>
//             <source src='https://s3-us-west-2.amazonaws.com/coverr/mp4/Hello-World.mp4' type="video/mp4" />            
//           </video>          


export default About
