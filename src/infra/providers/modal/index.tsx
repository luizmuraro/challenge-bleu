import { Modal } from '@/components/Modal'
import { useGlobalStore } from '@/infra/store'

export const ModalProvider = () => {
  const { modal, hideModal } = useGlobalStore((state) => state)

  return <Modal modal={modal} hideModal={hideModal} />
}
