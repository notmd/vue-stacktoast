
import { defineComponent, h, provide } from "vue"
import ToastComponent from "./Toast"
import { useToastManager } from "../useToastManager"

export default defineComponent({
  components: {
    ToastComponent
  },
  setup(_, { attrs, slots }) {
    const toastManager = useToastManager()
    const toasts = toastManager.toasts

    provide("toastManager", toastManager)

    return () =>
      h("div", attrs, [
        h("div", null, {
          default: slots.default
        }),
        h('div', { class: '' }, toasts.value.map((toast) =>
          h(ToastComponent, {
            class: 'relative mb-4',
            key: toast.uuid,
            toast,
            onClose: () => toastManager.close(toast)
          })
        ))
      ])
  }
})