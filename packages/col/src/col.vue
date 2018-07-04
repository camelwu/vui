<template>
  <div
    class="vu-col"
    :class="{ [`vu-col-${span}`]: span, [`vu-col-offset-${offset}`]: offset}"
    :style="style"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VuCol',

  props: {
    span: [Number, String],
    offset: [Number, String]
  },

  computed: {
    gutter () {
      return (this.$parent && this.$parent.gutter) || 0;
    },
    style () {
      const padding = this.gutter;
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  }
};
</script>
