import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} />;
};

const ModalOverLay = ({children}) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}> {children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

export default function Modal({ children }) {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverLay>{children}</ModalOverLay>,
				portalElement
			)}
		</Fragment>
	);
}
