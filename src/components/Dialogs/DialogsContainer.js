import {addMsgAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMsg: (newMessage) => {
      dispatch(addMsgAction(newMessage))
    }
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
) (Dialogs);