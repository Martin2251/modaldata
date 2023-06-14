import React from 'react';

const Modal = ({ isOpen, closeModal, data }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Modal;


