import { ShowModalProps, useGlobalStore } from '@/infra/store'
import { useCallback } from 'react'

export const useModal = (onClose: () => void) => {
  const { showModal, hideModal } = useGlobalStore((state) => state)

  const show = useCallback(
    (props: ShowModalProps) => {
      showModal(props)
    },
    [showModal],
  )

  const hide = useCallback(() => {
    onClose()
    hideModal()
  }, [hideModal, onClose])

  return {
    show,
    hide,
  }
}
