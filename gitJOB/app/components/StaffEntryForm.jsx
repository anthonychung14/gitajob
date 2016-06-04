import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { addEntry } from 'actions/staff'

/* component styles */
import { styles } from 'css/components/staff-entry-form';

class StaffEntryForm extends Component {    

  bark(){
    console.log("woof")

  }

  render() {
    const { fields: {name, email, linkedin, title}, submitting, addEntry, companyId, previousPage, handleSubmit } = this.props;
    return (              
        <section className={`${styles}`}>
        <form onSubmit={data =>{
          console.log("IN THE ADD FORM ENTRY", this.props, companyId)
          addEntry(props, companyId)

          }}>          

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
          
        <ButtonCircle disabled={submitting} onClick={previousPage} title="tag">
        <Icon                
          fill="currentColor"
          height="1em"
          name="close"
          width="1em"/>                
        </ButtonCircle>
        <ButtonCircle type="submit" title="tag" disabled={submitting}>
        <Icon                
          fill="currentColor"
          height="1em"
          name="check"
          width="1em"/>                
        </ButtonCircle>      
        </form>
        </section>
    );
  }
}

//connect's first arg is mapState to props, mapDispatch to Props
//redux: 1 form config, last two etc.

export default reduxForm({
  form: 'staffEntryForm',
  fields: ["name", "email", "linkedin", "title"]
}, null, { addEntry })(StaffEntryForm);
