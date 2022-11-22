import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";
import React from "react";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('groot')
      )}
    </React.Fragment>
  );
};

export default Modal;