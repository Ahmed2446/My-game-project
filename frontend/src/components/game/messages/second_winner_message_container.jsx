import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import SecondWinnerMessage from './second_winner_message';

const mapDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDTP)(SecondWinnerMessage);