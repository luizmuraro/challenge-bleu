import {
  AllSlices,
  GlobalStore,
  ModalSlice,
} from '@/infra/store/useGlobalStore/types'
import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'

const initialState = {
  modal: {
    visible: false,
    title: '',
    content: undefined,
    actions: [],
    closeOn: [],
  },
}

const modalSlice: StateCreator<ModalSlice, [], [], ModalSlice> = (set) => ({
  ...initialState,
  showModal: ({ actions, content, title, closeOn }) => {
    set({
      modal: {
        visible: true,
        title,
        content,
        actions,
        closeOn,
      },
    })
  },
  hideModal: () => {
    set({ modal: initialState.modal })
  },
})

const resetSlices: StateCreator<AllSlices, [], [], AllSlices> = (set) => ({
  ...initialState,
  reset: () => {
    set({ ...initialState })
  },
})

export const useGlobalStore = create<GlobalStore>()(
  devtools(
    (...a) => ({
      ...modalSlice(...a),
      ...resetSlices(...a),
    }),
    { name: 'globalStore' },
  ),
)
