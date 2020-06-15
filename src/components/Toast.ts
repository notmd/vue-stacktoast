import { defineComponent, h, PropType, onMounted, onBeforeUnmount, provide } from 'vue'
import { Toast } from '../types'

export default defineComponent({
  props: {
    toast: {
      type: Object as PropType<Toast>,
      required: true
    },
  },

  setup(props, { emit }) {
    let timeout: ReturnType<typeof setTimeout> | undefined
    const duration = props.toast.duration || 5000

    function close() {
      emit('close')
    }

    onMounted(() => {
      if (duration > -1) timeout = setTimeout(() => close(), duration)
    })

    onBeforeUnmount(() => {
      if (timeout) {
        clearTimeout(timeout)
      }
    })

    provide('toast', {
      close,
      uuid: props.toast.uuid
    })

    return () => h('div', {
    }, props.toast.render)
  }
})