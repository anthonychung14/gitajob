import React, { Component } from "react";

class FeedbackForm extends Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
  };

  getInitialState() {
    return {
      demographic: 'recruiter'
    }
  }

  state = { email: null, positive: null, demographic: null, better: null, selected: ''};

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  handleRadioChange = (e) => {
    this.setState({
      demographic: e.target.value,
      selected: e.target.value
    })
  }

  render() {
    return (
      <div className="neal-signup-inline">
        <form className="form-inline row" onSubmit={this.handleSubmit}>            
          <h1>Leave Specific feedback below!</h1>
          <fieldset>
            <legend>Role?</legend>
            <p>              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'recruiter'}                     
                     id = "recruiter"
                     value = "recruiter"/>              
              <label for = "recruiter">Recruiter</label>              
              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'employer'}                     
                     id = "employer"
                     value = "employer" />
              <label for = "employer">Employer</label>
     
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.demographic === 'peer'}                     
                     id = "peer"
                     value = "peer" />
              <label for = "peer">Peer</label>
              
              <input type = "radio"
                     name = "demographic"
                     onChange={this.handleRadioChange}
                     checked={this.state.selected === 'other'}                     
                     id = "other"
                     value = "other" />
              <label for = "other">Other</label>
            </p>       
      </fieldset>     
          
          <fieldset>                       
            <legend>What went well?</legend>
            <textarea maxlength="100" type="positive" size="40" required className="form-control" name="positive" placeholder="Color scheme on fleek. I love orange"
              onChange={this.handleChange}/>              
          </fieldset>

          <fieldset>            
            <h4>What can I do more of, less of, or add/remove?</h4>
            <textarea type="better" required size="40" className="form-control" name="better" placeholder="You should have this. Or not have that."
              onChange={this.handleChange}/>
          </fieldset>

          <fieldset>
            <legend>Email address (optional)</legend>
            <input type="email" className="form-control" size="40" name="email" placeholder="comment.mcComment@comment.com"
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

export default FeedbackForm