import { inject, isVNode } from 'vue';
import { Toast, ToastOption } from './types';
import { ToastManager } from './types';

export function useToast() {
  let toast: Toast | undefined
  const toastManager = inject<ToastManager>('toastManager')

  function show(options: ToastOption) {
    toast = toastManager?.show(options)

    return toast
  }

  function close(instace?: Toast) {
    toastManager?.close((isVNode(instace) ? instace : toast) as Toast)
  }

  return {
    manager: toastManager,
    show,
    close,
    clear: () => toastManager?.clear()
  }
}