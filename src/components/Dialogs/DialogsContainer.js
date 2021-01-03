import {addMsgAction, updateMsgAction} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMsg: () => {
      dispatch(addMsgAction())
    },
    updateNewMsg: (text) => {
      dispatch(updateMsgAction(text))
    },
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;