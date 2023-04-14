<template lang="pug">
.w-split-view(
  ref="mainContainerRef"
  @mousemove="resizeViews"
  @mouseup="unselectView"
  )

  w-split-container(:is="views[0]" :style="getViewStyle(0)")
  template(v-for="(slot, index) in views.slice(1)" :key="`handle-${index}`")
    w-split-handle(
      :options="handleOptions"
      :position="getPosition(index + 1, viewsOptions)"
      :direction="direction"
      @mousedown="selectHandle($event, index + 1)"
      )
    w-split-container(:is="slot" :style="getViewStyle(index + 1)")
</template>

<script>
import { useResizeObserver } from '@vueuse/core'
import WSplitHandle from './w-split-handle.vue'
import WSplitContainer from './w-split-container.vue'
import { sum, ViewOptionsUtils } from './utils'

const OverflowDirection = {
  LeftOrUp: 0,
  RightOrDown: 1
}

export default {
  name: 'w-split-view',
  components: { WSplitHandle, WSplitContainer },
  props: {
    direction: {
      type: String,
      default: 'row'
    },
    handleOptions: {
      type: Object,
      default: () => ({
        focusedSize: 5,
        focusedColor: '#0D6EFD',
        defaultSize: 1,
        defaultColor: '#383838'
      })
    }
  },
  emits: ['grabHandle', 'releaseHandle', 'dragHandle'],
  data () {
    return {
      selectedHandle: undefined,
      handlePosition: undefined,
      positions: [],
      viewsOptions: []
    }
  },
  computed: {
    directionIsColumn () {
      return this.direction === 'column'
    },
    views () {
      const _views = this.$slots.default()
      return _views
    }
  },
  created () {
    this.viewsOptions = this.views.map((node) => {
      const defaultMaxSize = Infinity
      const defaultMinSize = '0px'
      // console.log(node.props?.style)
      return this.directionIsColumn
        ? ({
            maxSize: node.props?.style?.maxHeight || defaultMaxSize,
            minSize: node.props?.style?.minHeight || defaultMinSize,
            size: node.props?.style?.height
          })
        : ({
            maxSize: node.props?.style?.maxWidth || defaultMaxSize,
            minSize: node.props?.style?.minWidth || defaultMinSize,
            size: node.props?.style?.width
          })
    })
  },
  unmounted () {
    // document.getElementsByTagName('body')[0].onmousemove = null
    // document.getElementsByTagName('body')[0].onmouseup = null
  },
  mounted () {
    // if (!document.getElementsByTagName('body')[0].onmousemove) {
    //   document.getElementsByTagName('body')[0].onmousemove = (e) => this.resizeViews(e)
    // }
    // if (!document.getElementsByTagName('body')[0].onmouseup) {
    //   document.getElementsByTagName('body')[0].onmouseup = (e) => this.unselectView(e)
    // }
    useResizeObserver(this.$refs.mainContainerRef, (entries) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      if (width === undefined || height === undefined) return

      this.viewsOptions.map((viewOptions) => {
        // 将 % 样式转换为像素
        Object.entries(viewOptions).forEach(
          ([key, value]) => {
            Object.defineProperty(viewOptions, key, {
              value: ViewOptionsUtils.convertToPixels(
                value,
                this.directionIsColumn ? height : width
              )
            })
          }
        )

        return viewOptions
      })

      // 平均分配剩余空间（应该只在第一次发生）
      const used = sum(
        ...this.viewsOptions.map((options) =>
          ViewOptionsUtils.getValue(options.size)
        )
      )

      const available = Math.max(
        0,
        (this.directionIsColumn ? height : width) - used
      )

      const undefinedSizesIndices = this.viewsOptions
        .map(
          (options, index) => [options, index]
        )
        .filter(
          ([options]) =>
            !ViewOptionsUtils.getValue(options.size)
        )
        .map(([_, index]) => index)

      const averageSize = available / undefinedSizesIndices.length
      undefinedSizesIndices.forEach((index) => {
        // TODO：“averageSize”可能小于/大于视图的最小/最大值。
        this.viewsOptions[index].size = averageSize === Infinity ? Infinity : `${averageSize}px`
      })

      // 缩放所有值以适应窗口的大小（例如，调整拆分视图大小时）
      const currentSize = ViewOptionsUtils.getSumOfSizes(this.viewsOptions)
      if (currentSize !== 0) {
        const ratio = (this.directionIsColumn ? height : width) / currentSize
        this.viewsOptions.forEach(({ size }, index) => {
          // 缩放后的尺寸可能小于/大于视图的最小/最大值
          this.viewsOptions[index].size = `${ViewOptionsUtils.getValue(size) * ratio}px`
        })
      }
    })
  },
  methods: {
    getViewStyle (viewIndex) {
      const size = `${this.viewsOptions[viewIndex].size}`
      const position = this.getPosition(viewIndex, this.viewsOptions)
      return {
        overflow: 'clip',
        position: 'absolute',
        top: (this.directionIsColumn ? position : 0) + 'px',
        left: (!this.directionIsColumn ? position : 0) + 'px',
        height: this.directionIsColumn ? size : '100%',
        width: !this.directionIsColumn ? size : '100%'
      }
    },
    getPosition (viewIndex, viewsOptions) {
      return sum(
        ...viewsOptions
          .slice(0, viewIndex)
          .map((options) => ViewOptionsUtils.getValue(options.size))
      )
    },
    selectHandle (e, index) {
      e.preventDefault() // 防止拖动视图而不是手柄
      this.selectedHandle = index
      this.handlePosition = this.directionIsColumn ? e.clientY : e.clientX
      // console.log('selectHandle', this.selectedHandle)
      // console.log('handlePosition', this.handlePosition)
      this.$emit('grabHandle')
    },
    unselectView () {
      if (this.selectedHandle !== undefined || this.handlePosition !== undefined) {
        this.selectedHandle = undefined
        this.handlePosition = undefined
        this.$emit('releaseHandle')
      }
    },
    resizeView (
      direction,
      viewIndex,
      distance,
      dryRun = false
    ) {
      if (!(viewIndex >= 0 && viewIndex < this.viewsOptions.length) || distance === 0) {
        return 0
      }

      const currentSize = ViewOptionsUtils.getValue(this.viewsOptions[viewIndex].size)
      const desiredSize =
        currentSize +
        (direction === OverflowDirection.LeftOrUp ? -distance : +distance)

      const { maxSize, minSize } = this.viewsOptions[viewIndex]
      const possibleSize = Math.min(
        ViewOptionsUtils.getValue(maxSize) || Infinity,
        Math.max(ViewOptionsUtils.getValue(minSize), desiredSize)
      )

      const sizeDiff = possibleSize - desiredSize
      const currentSizeGain = possibleSize - currentSize
      let childrenSizeGain = 0

      if (sizeDiff !== 0) {
        childrenSizeGain += this.resizeView(
          direction,
          viewIndex + (direction === OverflowDirection.LeftOrUp ? -1 : 1),
          direction === OverflowDirection.LeftOrUp ? sizeDiff : -sizeDiff,
          dryRun
        )
      }

      if (!dryRun) {
        this.viewsOptions[viewIndex].size = `${possibleSize}px`
      }
      return currentSizeGain + childrenSizeGain
    },
    resizeViews (e) {
      const { clientX, clientY, currentTarget, buttons } = e
      // console.log('selectedHandle:', this.selectedHandle, 'handlePosition:', this.handlePosition)
      if (this.selectedHandle === undefined || this.handlePosition === undefined) return
      if (buttons !== 1) return this.unselectView()

      // 获取鼠标位移
      const mousePosition = this.directionIsColumn ? clientY : clientX
      const desiredDisplacement = this.handlePosition - mousePosition
      if (desiredDisplacement === 0) return

      // 获取新视图维度
      // 运行模拟
      const possibleLeftOrUpDisplacement = Math.abs(
        this.resizeView(
          OverflowDirection.LeftOrUp,
          this.selectedHandle - 1,
          desiredDisplacement,
          true
        )
      )

      const possibleRightOrDownDisplacement = Math.abs(
        this.resizeView(
          OverflowDirection.RightOrDown,
          this.selectedHandle,
          desiredDisplacement,
          true
        )
      )

      // 最大化双方可能的位移
      const possibleDisplacement = Math.min(
        possibleLeftOrUpDisplacement,
        possibleRightOrDownDisplacement
      )
      const direction = desiredDisplacement / Math.abs(desiredDisplacement)

      // 调整视图大小（真实）
      this.resizeView(
        OverflowDirection.LeftOrUp,
        this.selectedHandle - 1,
        possibleDisplacement * direction
      )
      this.resizeView(
        OverflowDirection.RightOrDown,
        this.selectedHandle,
        possibleDisplacement * direction
      )

      // 获取容器位置
      // const containerRect = this.$refs.mainContainerRef.getBoundingClientRect()

      // 获得新的手柄位置
      const { top, left } = currentTarget.getBoundingClientRect()
      // console.log(top, left)
      // const parentOffset = this.directionIsColumn ? top + containerRect.y : left + containerRect.x
      const parentOffset = this.directionIsColumn ? top : left
      const relativeHandlePosition = this.getPosition(this.selectedHandle, this.viewsOptions)
      // console.log(containerRect)
      this.handlePosition = relativeHandlePosition + parentOffset
      this.$emit('dragHandle')
    }
  }
}
</script>

<style lang="scss">
.w-split-view {
  height: 100%;
  width: 100%;
  position: relative;

  @include themeable;
}
</style>
