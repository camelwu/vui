<template>
  <div class="vu-badge-group vu-hairline--top-bottom">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VuBadgeGroup',

  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },

  data () {
    return {
      badges: []
    };
  }
};
</script>
