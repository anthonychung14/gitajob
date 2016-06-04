import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'
import styles from 'css/components/staff-card';

import StaffEntryForm from 'components/StaffEntryForm'

const cx = classNames.bind(styles);

export default class StaffCard extends Component {
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
      <div>
      <h5>Hi</h5>      
      <ButtonCircle onClick={this.nextPage} title="tag">
          <Icon                
            fill="currentColor"
            height="1em"
            name="user"
            width="1em"/>                
        </ButtonCircle>
      </div>
    )
  }

  render() {
    const { page } = this.state
    const { companyId } = this.props
    return (
      <div className={cx('staff-card')}>      
        {page === 1 && this.renderStaffData()}        
        {page === 2 && <StaffEntryForm companyId={companyId} 
          previousPage={this.previousPage} onSubmit={this.nextPage}/>}
      </div>
    );
  }
};

StaffCard.propTypes = {
  staff: PropTypes.array.isRequired,
  destroyOnUnmount: false
};


