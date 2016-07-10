import React, { Component, PropTypes } from 'react';
import Features from 'components/Features'

import styles from 'css/components/about';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


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
          <Features animate={}/>          
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
   // <LoadingOrderAnimation animation="fade-in"
   //    move="from-left-to-right"
   //    distance={100}
   //    speed={1700}
   //    wait={2000}>

   //    <LoadingOrderAnimation animation="fade-in"
   //    move="from-left-to-right"
   //    distance={100}
   //    speed={1700}
   //    wait={2500}>


   //    <LoadingOrderAnimation animation="fade-in"
   //    move="from-bottom-to-top"
   //    distance={50}
   //    speed={1700}
   //    wait={2700}>
