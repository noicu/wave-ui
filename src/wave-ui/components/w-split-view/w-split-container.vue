<template lang="pug">
.w-split-container()
  component(:is="is" style="width: 100%; height: 100%; max-width: none; max-height: none; min-width: none; min-height: none;")
</template>

<script>

export default {
  name: 'w-split-container',
  props: {
    is: { type: Object }
  }
}
</script>

<style lang="scss">

</style>
