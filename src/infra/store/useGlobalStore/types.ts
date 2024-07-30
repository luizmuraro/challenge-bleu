import { ReactElement } from 'react'

export interface ActionProps {
  title: string
  onClick: () => void
}

export interface ShowModalProps {
  title: string
  cover?: ReactElement
  content?: ReactElement
  actions?: Array<ActionProps> | undefined
  hideCloseButton?: boolean
  closeOn?: Array<'esc' | 'outside'>
}

export interface ModalSlice {
  modal: {
    visible: boolean
    cover?: ReactElement
    title: string
    content?: ReactElement
    actions?: Array<ActionProps>
    hideCloseButton?: boolean
    closeOn?: Array<'esc' | 'outside'>
  }
  showModal: (props: ShowModalProps) => void
  hideModal: () => void
}
export interface AllSlices extends Partial<ModalSlice> {
  reset: () => void
}

export type GlobalStore = AllSlices & ModalSlice
