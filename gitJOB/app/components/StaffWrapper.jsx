import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import styles from 'css/components/staff-card';

import StaffEntryForm from 'components/StaffEntryForm'
import StaffEntryCard from 'components/StaffEntryCard'

const cx = classNames.bind(styles);

export default class StaffWrapper extends Component {
  constructor(props) {
    super(props) 

    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  addEntryForm(){
    return (
      <div className={cx('add-form')}>      
      <ButtonCircle onClick={this.nextPage} title="tag">
          <Icon                
            fill="currentColor"
            height="2em"
            name="compose"
            width="2em"/>                
      </ButtonCircle>        
      <div className={cx('staff-data')}>
        Add Contact
      </div>
      </div>
    )
  }

  renderStaffEntryCard() {
    return (
      <div>
      {this.addEntryForm()}
      <StaffEntryCard staff={[1,2,3,4]} />
      </div>
    )
  }

  render() {
    const { page } = this.state
    const { companyId } = this.props
    return (
      <div>      
        {page === 1 && this.renderStaffEntryCard()}        
        {page === 2 && <StaffEntryForm companyId={companyId} 
          previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      </div>
    );
  }
};

StaffWrapper.propTypes = {
  staff: PropTypes.array.isRequired,
  destroyOnUnmount: false
};


