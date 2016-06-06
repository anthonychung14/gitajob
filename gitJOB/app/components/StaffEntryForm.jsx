import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { addEntry } from 'actions/staff'

/* component styles */
import { styles } from 'css/components/staff-entry-form';

class StaffEntryForm extends Component {    

  submitForm(props){
    let finish = this.props.previousPage.bind(this)
    addEntry(props, this.props.companyId, finish)
  }

  render() {
    const { fields: {name, email, linkedin, title}, submitting, companyId, previousPage, handleSubmit } = this.props;
    return (              
        <section>
        <form onSubmit={handleSubmit(this.submitForm.bind(this))}>          
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" {...name} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" {...email} />
          </div>

          <div className="form-group">
            <label>LinkedIn Profile</label>
            <input type="text" className="form-control" {...linkedin} />
          </div>

          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} />
          </div>

          <button type="button" disabled={submitting} onClick={previousPage}>
            <i/> Cancel
          </button>
          
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>          
        </form>
        </section>
    );
  }
}

export default reduxForm({
  form: 'staffEntryForm',
  fields: ["name", "email", "linkedin", "title"]
}, null, { addEntry })(StaffEntryForm);
