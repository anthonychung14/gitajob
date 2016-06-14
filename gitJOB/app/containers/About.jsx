import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { postFeedback } from 'actions/feedback'

import styles from 'css/components/about';
import LoginOrRegister from 'containers/LoginOrRegister'
import LandingForm from 'components/LandingForm'
import FeedbackForm from 'components/FeedbackForm'

// import { Page, Hero, Section, SignupInline, ImageList, ImageListItem, Team, TeamMember, HorizontalSplit } from "neal-react";
import FaCab from 'react-icons/lib/fa/cab'
import GoLightBulb from 'react-icons/lib/go/light-bulb'
import GoTerminal from 'react-icons/lib/go/terminal'

const cx = classNames.bind(styles);

class About extends Component {
  submitFeedback(props){        
    postFeedback(props)
  }

  render() {
    return(    
      <div>
      <h4>Sign up if you want me to contact you about a job!</h4>
      <LandingForm onSubmit={this.submitFeedback}/> 
      </div>
    );    
  }
};



About.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    application: state.applications
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, 
  { postFeedback })(About);
