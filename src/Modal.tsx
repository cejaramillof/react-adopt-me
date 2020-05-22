import React, { useRef, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

// const modalRoot = document.getElementById('modal'); // reference to document on first render, you can move to useEffect.
const modalRoot = document.getElementById('modal');

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement('div'));

  /*
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }
  */

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    // modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current)

    // return is the component will unmount of hooks
    return () => {modalRoot.removeChild(elRef.current)}
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;