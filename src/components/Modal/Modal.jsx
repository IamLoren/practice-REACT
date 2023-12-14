import React, { useEffect } from "react";
import { StyledModalContent, StyledModalWrapper } from "./Modal.styled";
import { BrowserRouter } from "react-router-dom";

export const Modal = ({ handleCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal]);

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  return (
    <StyledModalWrapper onClick={clickOutside}>
      <StyledModalContent>
        <div>
          <p>Title</p>
          <button onClick={handleCloseModal}>X</button>
        </div>
        {children}
      </StyledModalContent>
    </StyledModalWrapper>
  );
};

// export class Modal extends React.Component {
// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handleKeyDown)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleKeyDown)
// 	}

// handleKeyDown = e => {
// 	if (e.key === 'Escape') {
// 		this.props.handleCloseModal()
// 	}
// }

// clickOutside = e => {
// 	if (e.target === e.currentTarget) {
// 		this.props.handleCloseModal()
// 	}
// }

// 	render() {
// 		const { children, handleCloseModal } = this.props
// 		return (
// 			<StyledModalWrapper onClick={this.clickOutside}>
// 				<StyledModalContent>
// 					<div>
// 						<p>Title</p>
// 						<button onClick={handleCloseModal}>X</button>
// 					</div>
// 					{children}
// 				</StyledModalContent>
// 			</StyledModalWrapper>
// 		)
// 	}
// }

// export const Modal = ({ children, handleCloseModal }) => {
//   return (
//     <div>Modal</div>
//   )
// }
