import { ActionProps } from '@/infra/store'
import type { ReactElement } from 'react'

export interface ModalProps {
  modal: {
    visible: boolean
    title: string
    content?: ReactElement
    actions?: Array<ActionProps>
  }
  hideModal: () => void
}
