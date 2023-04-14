<template lang="pug">
div
  .w-divider.my12
  title-link.title1(h2) API

  component-api.mt0(:items="props" :descriptions="propsDescs" title="Props")

  component-api(:items="slots" title="Slots")

  component-api(:items="events" title="Events")
</template>

<script>
import WSplitView from '@/wave-ui/components/w-split-view/index.vue'

const propsDescs = {
  direction: '排列方向，可选值为 row 或 column，分别表示水平排列和垂直排列。',
  handleOptions: `拖动条的配置
  <br> - focusedSize: 获得焦点时的尺寸
  <br> - defaultSize: 默认尺寸
  <br> - focusedColor: 获得焦点时的颜色
  <br> - defaultColor: 默认颜色
  `
}

const slots = {
  default: { description: '任意元素' }
}

const eventsDescs = {
  grabHandle: '当拖动条获得焦点时触发',
  releaseHandle: '当拖动条失去焦点时触发',
  dragHandle: '当拖动条拖动时触发'
}

export default {
  data: () => ({
    propsDescs,
    slots
  }),

  computed: {
    // Reads all the props and events directly from the component, so that as soon as a new prop or event
    // is added it will appear even if no description is yet provided.
    props () {
      return WSplitView.props
    },
    events () {
      return WSplitView.emits.reduce((obj, label) => (obj[label] = { description: eventsDescs[label] || '' }) && obj, {})
    }
  }
}
</script>
