<template>
  <div class="vu-row" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VuRow',

  props: {
    gutter: {  // 列间距的1/2，传入带单位的字符串:  18px  .5rem
      type: [String],
      default: '0'
    }
  },

  computed: {
    style () {
//      const margin = `-${Number(this.gutter) / 2}px`;
      const margin = '-' + this.gutter;

      return this.gutter
        ? { marginLeft: margin, marginRight: margin }
        : {};
    }
  }
};
</script>
