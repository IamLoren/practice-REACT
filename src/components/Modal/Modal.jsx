import React from "react";
import { StyledModalContent, StyledModalWrapper } from "./Modal.styled";

export class Modal extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.handleCloseModal();
    }
  }

  clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      this.props.handleCloseModal();
    }
  }


  render() {
    const { children, handleCloseModal } = this.props
    return (
      <StyledModalWrapper onClick={this.clickOutside}>
        <StyledModalContent>{children}
          <button onClick={handleCloseModal}>X</button>
        </StyledModalContent>
      </StyledModalWrapper>
    )
  }
}


// export const Modal = ({ children, handleCloseModal }) => {
//   return (
//     <div>Modal</div>
//   )
// }
