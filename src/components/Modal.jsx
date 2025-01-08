import React from 'react';

    function Modal({ onClose }) {
      return (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className="modal-headline">Thank You!</h2>
              <p className="modal-text">Your message has been received.</p>
              <button className="modal-close-button" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      );
    }

    export default Modal;
