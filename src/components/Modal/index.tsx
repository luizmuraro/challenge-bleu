import { ModalProps } from '@/components/Modal/types'
import {
  ButtonsContainer,
  HeaderContainer,
  ModalContainer,
  ModalWrapper,
  StyledButton,
  Title,
} from './styles'

export function Modal({ modal }: ModalProps) {
  return (
    <ModalWrapper show={modal.visible}>
      <ModalContainer>
        <HeaderContainer>
          <div />
          <Title>{modal.title}</Title>
        </HeaderContainer>
        {modal.content}
        {!!modal.actions && modal.actions?.length > 0 && (
          <ButtonsContainer>
            {modal.actions.map((action) => (
              <StyledButton
                aria-label={action.title}
                onClick={action.onClick}
                key={action.title}
              >
                {action.title}
              </StyledButton>
            ))}
          </ButtonsContainer>
        )}
      </ModalContainer>
    </ModalWrapper>
  )
}
