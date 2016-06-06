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

  renderStaffData(){
    return (
      <div className={cx('contact-card')}>      
      <ButtonCircle onClick={this.nextPage} title="tag">
          <Icon                
            fill="currentColor"
            height="2em"
            name="user"
            width="2em"/>                
      </ButtonCircle>        
      <div className={cx('staff-data')}>
        <p>Bob Dole</p>
        <p>Technical Recruiter</p>
        <p>Talked to 3 days ago</p>        
      </div>
      </div>
    )
  }

  renderStaffEntryCard() {
    return (
      <StaffEntryCard staff={[1,2,3,4]} />
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


