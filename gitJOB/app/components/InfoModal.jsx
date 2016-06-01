import React, { Component, PropTypes } from 'react';
import { Modal, OverlayTrigger, Button, Popover, Tooltip } from 'react-bootstrap'

export default class InfoModal extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { modalState, openModal, activeJob } = this.props    
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;
    if (!modalState) { return ( <span/>) }    
    return (
        <Modal show={modalState} onHide={openModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            {activeJob.desc}
            
            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={openModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    )
  }
}

    
