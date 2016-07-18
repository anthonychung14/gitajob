import React, { Component } from "react";
import classNames from 'classnames/bind';
import styles from 'css/components/feedback-form.css'
import { connect } from 'react-redux';

import { postFeedback } from 'actions/feedback'

const cx = classNames.bind(styles);

class FeedbackForm extends Component {
  constructor(props) {
    super(props)
    this.state = { email: null, positive: null, demographic: 'recruiter', better: null, selected: ''};
  }
  

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.postFeedback) { this.props.postFeedback(this.state); }
  };

  handleRadioChange = (e) => {
    this.setState({
      demographic: e.target.value,
      selected: e.target.value
    })
  }

  render() {
    return (
      <div className={cx("signup-inline")}>
        <form className={cx("signup-inline")} onSubmit={this.handleSubmit}>            
          <fieldset>
            <p>              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'recruiter'}                     
                     id = "recruiter"
                     value = "recruiter"/>              
              <h5 for = "recruiter">Recruiter</h5>              
              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'employer'}                     
                     id = "employer"
                     value = "employer" />
              <h5 for = "employer">Employer</h5>
     
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'peer'}                     
                     id = "peer"
                     value = "peer" />
              <h5 for = "peer">Peer</h5>
              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.selected === 'other'}                     
                     id = "other"
                     value = "other" />
              <h5 for = "other">Other</h5>
            </p>       
      </fieldset>     
          
          <fieldset>                       
            <legend>Go ahead. Make my day</legend>
            <textarea size="20" maxlength="200" type="positive" required className={cx("text-area")} name="positive" placeholder="Write right away"
              onChange={this.handleChange}/>              
          </fieldset>          
          
          <div className="form-group" size={["xs-12", "lg-2"]}>
            <button type="submit" className="btn btn-primary btn-ghost">Send Feedback</button>
          </div>
        </form>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {    
  };
}

export default connect(mapStateToProps, {postFeedback})(FeedbackForm)