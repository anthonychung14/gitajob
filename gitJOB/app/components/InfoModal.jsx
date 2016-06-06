import React, { Component, PropTypes } from 'react';
import {Modal, OverlayTrigger, Button, Popover, Tooltip } from 'react-bootstrap'
import classNames from 'classnames/bind';
import styles from 'css/components/info-modal';
import QueueIcon from 'css/icons/queue'
import moment from 'moment'
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import StaffWrapper from 'components/StaffWrapper'

const cx = classNames.bind(styles);

const InfoModal = ({modalState, openModal, closeModal, deny, affirm, activeJob}) => {            
    if (!modalState) { return ( <span/>) }    
    
    
    const denyAndClose = () => {
      deny(activeJob._id, activeJob)
      closeModal()
    }

    const affirmAndClose = () => {
      affirm(activeJob._id, activeJob)
      closeModal()
    }

    const needToMoveBackend = (salary) => {      
      let splitMoney = salary.split("K")
      const arrEquity = splitMoney.slice(2).join("")
      const arrMoney = splitMoney.slice(0,2).map(ele => ele += "K").join("")      
      
      return (
        <div className={cx('modal-meta')}>              
          <div>{arrMoney}</div>
          <div>{arrEquity}</div>
        </div>
      ) 
    }

    const generateLongDescript = () => {
      if (!activeJob.longDescript) {return <span></span>}
      return (
        <div className={cx('column-section')}>
        <h4>Job Description</h4>
        {activeJob.longDescript}
      </div>
      )
    }

    const generateWhy = () => {
      if (!activeJob.why) {return <span></span>}
      return (
      <div className={cx('column-section')}>
        <h4>Why us</h4>
        {activeJob.why}
      </div>
      )
    }

    const generateTagIcon = (tag, index) => {
      return (
      <div key={index} index={index} className={cx('button')}>
        <ButtonCircle title="tag">
          <Icon                
            fill="currentColor"
            height="1em"
            name="tag"
            width="1em"/>                
        </ButtonCircle>
        <div>{tag}</div>
       </div>
      )      
    }

    const tooltipNo = (
      <Tooltip id="no">No thanks</Tooltip>
    );
    const tooltipYes = (
      <Tooltip id="yes">Add</Tooltip>
    );

    return (
        <Modal dialogClassName={cx("modal-screen")} show={modalState} onHide={closeModal}>
          <Modal.Header className={cx('modal-header')} bsClass={cx('modal_header')}>
          <div>
            <Modal.Title className={cx('modal-title')}>              
            {activeJob.job_title}
            </Modal.Title>            
            <div className={cx('action-bar')}>
              <OverlayTrigger placement="bottom" overlay={tooltipNo}>
                <div className={cx('button')}>
                <ButtonCircle backgroundColor="red" onClick={denyAndClose} title="No!">
                  <Icon                
                    fill="currentColor"
                    height="2em"
                    name="close"
                    width="2em"/>                
              </ButtonCircle>
                </div>  
              </OverlayTrigger>

              <OverlayTrigger placement="bottom" overlay={tooltipYes}>
              <div className={cx('button')}>
              <ButtonCircle backgroundColor="green" onClick={affirmAndClose} title="Add">
                <Icon                
                  fill="currentColor"
                  height="2em"
                  name="star"
                  width="2em"/>                
              </ButtonCircle>
              </div>
              </OverlayTrigger>
            </div>
          </div>
          
          
          <div className={cx('modal-meta')}>              
            <div>{activeJob.location}</div>
            <div className={cx('modal-salary')}>{needToMoveBackend(activeJob.salary)}</div>                                    
          </div>
          
          </Modal.Header>
          <Modal.Footer></Modal.Footer>

          
          <Modal.Body className={cx('main-body')}>
            <div className={cx('left-column')}>              
              
              <div className={cx('column-section')}>
                <h4>Product</h4>
                {activeJob.desc}
              </div>
              
              {generateWhy()}              
              
              <div className={cx('column-section')}>
                <h4>Tags</h4>
                <div className={cx('tag-container')}>
                {activeJob.tag_data.map((ele, index) => {
                  return generateTagIcon(ele, index)}
                )}                    
                </div>
              </div>
                            
            </div>
            <div className={cx('contacts-column')}>
              <h4>Engineers/Staff</h4>
              <StaffWrapper companyId={activeJob._id} staff={[]}/>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <h4>{activeJob.last_active}</h4>
            <h4><a href={'http://'+activeJob.company_link} target="_newtab">{activeJob.company_link}</a></h4>            
          </Modal.Footer>
        </Modal>
    )
  }

export default InfoModal

// <span><img src={activeJob.img}/>


