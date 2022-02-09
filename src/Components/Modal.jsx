import React,{useState} from "react";

function Modal({name}) {

    return(
      <div className="modal-section">
          {name?(<><div className="btnadded">
              <button>добавить файл </button>
              <button>добавить  фото  </button>
          </div>
          <div className="inp">
              <h6>название</h6>
              <input/>
          </div></>) : null}
          
      </div>
    );
}

export default Modal;