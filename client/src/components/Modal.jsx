/* eslint-disable react/prop-types */


const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			onClick={onClose}
			style={{
				position: "fixed",
				top:0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
