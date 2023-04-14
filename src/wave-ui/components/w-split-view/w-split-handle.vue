<template lang="pug">
.w-split-handle(
  :class="className"
  :style="style"
  @mousedown="focused = true"
  @mouseenter="focused = true"
  @mouseleave="focused = false"
  @focus="focused = true"
  @blur="focused = false"
  )
</template>

<script>

export default {
  name: 'w-split-handle',
  props: {
    position: { type: Number },
    direction: { type: String },
    options: { type: Object }
  },
  emits: [],
  data () {
    return {
      focused: false
    }
  },
  computed: {
    className () {
      return {
        'w-split-handle--focused': this.focused,
        'w-split-handle--column': this.directionIsColumn
      }
    },
    handleSize () {
      return this.focused
        ? this.options?.focusedSize || 5
        : this.options?.defaultSize || 1
    },
    color () {
      return this.focused
        ? this.options?.focusedColor || '#0D6EFD'
        : this.options?.defaultColor || 'lightgray'
    },
    directionIsColumn () {
      return this.direction === 'column'
    },
    handlePosition () {
      return this.position - this.handleSize / 2
    },
    style () {
      return {
        zIndex: 100,
        background: this.color,
        position: 'absolute',
        top: (this.directionIsColumn ? this.handlePosition : 0) + 'px',
        left: (!this.directionIsColumn ? this.handlePosition : 0) + 'px',
        width: this.directionIsColumn ? '100%' : this.handleSize + 'px',
        height: !this.directionIsColumn ? '100%' : this.handleSize + 'px',
        cursor: this.directionIsColumn ? 'row-resize' : 'col-resize'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
