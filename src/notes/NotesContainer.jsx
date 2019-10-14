import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Notes from "./Notes";
import * as actions from "./actions";

function mapStateToProps(state) {
  return {
    notes: state.notesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
export default NotesContainer;
