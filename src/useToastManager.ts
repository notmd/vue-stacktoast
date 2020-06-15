import { Toast, ToastOption } from "./types"
import { ref, Ref } from "vue"

export function useToastManager() {
  const toasts: Ref<Toast[]> = ref<Toast[]>([])
  let uuid = 0

  function show(toastOption: ToastOption) {
    uuid++
    const toast: Toast = {
      ...toastOption,
      uuid
    }

    toasts.value.push(toast)

    return toast
  }

  function close(toast: Toast) {
    const index = toasts.value.findIndex(
      (e: Toast) => e.uuid === toast.uuid
    )
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  function clear() {
    toasts.value = []
    console.log('cleared')
  }

  return {
    show,
    close,
    clear,
    toasts
  }
}