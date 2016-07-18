import React, { Component } from "react";

class LandingForm extends Component {

  static propTypes = {
    onSubmit: React.PropTypes.func,
  };

  state = { email: null, name: null, company: null, phone: null };

  handleChange = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();    
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  };

  render() {
    return (
      <div className="neal-signup-inline">
        <form className="form-inline row" onSubmit={this.handleSubmit}>
          <div className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="email">Name</label>
            <input type="name" required className="form-control" name="name" placeholder="Your awesome name"
              onChange={this.handleChange}/>
          </div>

          <div className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="company">Company</label>
            <input type="company" required className="form-control" name="company" placeholder="Company"
              onChange={this.handleChange}/>
          </div>

          <div className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="email">Email address</label>
            <input type="email" required className="form-control" name="email" placeholder="email@feedback.com"
              onChange={this.handleChange}/>
          </div>

          <div className="form-group" size={["xs-12", "lg-5"]}>
            <label className="sr-only" htmlFor="phone">Phone Number</label>
            <input type="text" pattern="\d*" className="form-control" name="phone" placeholder="digits (optional)"
              onChange={this.handleChange}/>
          </div>
          
          <div className="form-group" size={["xs-12", "lg-2"]}>
            <button type="submit" className="btn btn-primary btn-ghost">Let's chat!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LandingForm