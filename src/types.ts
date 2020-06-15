import { VNode } from 'vue';

export interface Toast {
  duration?: number
  render: VNode
  uuid: number,
}

export interface ToastOption {
  duration?: number
  render: VNode
}

export interface ToastManager {
  show(options: ToastOption): Toast,
  close(toast: Toast): void,
  clear(): void
}
