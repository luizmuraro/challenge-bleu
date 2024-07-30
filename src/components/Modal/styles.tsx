import styled from 'styled-components'

interface ModalWrapperProps {
  show: boolean
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`

// Estilo para o conteúdo do modal
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 80%;
  text-align: center;
  color: #333;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
  font-size: 12px;
  font-weight: bold;
`
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
export const StyledButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`
