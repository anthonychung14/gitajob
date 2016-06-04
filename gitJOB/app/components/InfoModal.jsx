import React, { Component, PropTypes } from 'react';
import {Modal, OverlayTrigger, Button, Popover, Tooltip } from 'react-bootstrap'
import classNames from 'classnames/bind';
import styles from 'css/components/info-modal';
import moment from 'moment'

const cx = classNames.bind(styles);

const InfoModal = ({modalState, openModal, closeModal, activeJob}) => {        
    if (!modalState) { return ( <span/>) }    
    

    return (
        <Modal dialogClassName={cx("modal-screen")} show={modalState} onHide={closeModal}>
          <Modal.Header className={cx('modal-header')} bsClass={cx('modal_header')}>
          <div>
            <Modal.Title>              
            {activeJob.job_title} 
            </Modal.Title>            
            <div className={cx('action-bar')}>
            <button className={cx('button')} onClick={openModal}>Close</button>
            <button className={cx('button')}onClick={console.log("hi")}>Add</button>                      
            </div>
          </div>

          <hr/>
          
          <div>
          <Modal.Body>          
          {activeJob.location}<br/>
            {activeJob.salary}
          </Modal.Body>                      
          </div>
          </Modal.Header>
          <Modal.Footer></Modal.Footer>

          
          <Modal.Body>
            <div className={cx('left_column')}>
              <div>
                <h4>Product</h4>
                {activeJob.desc}
                <h4>Why us</h4>
                {activeJob.why}
                <h4>Tags</h4>
                {activeJob.tag_data}
                <h4>Skills</h4>
                {activeJob.skills}
              </div>              

              <h4>Engineers/Staff</h4>
            </div>

          </Modal.Body>

          <Modal.Footer>
            <h4>{activeJob.last_active}</h4>
            <h4><a href={activeJob.company_link}>{activeJob.company_link}</a></h4>            
          </Modal.Footer>
        </Modal>
    )
  }

export default InfoModal



