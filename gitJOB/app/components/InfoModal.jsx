import { styles } from './styles.scss';
import { Modal } from 'react-bootstrap'

export class InfoModal extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    <Modal show={this.props.modalState.activeItem} onHide={this.props.openModal}>
      <h3>Here's the thing</h3>
    </Modal>
  }
}