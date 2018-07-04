<template>
  <a class="vu-badge vu-hairline" :class="{ 'vu-badge--select': isSelect }" :href="url" @click="onClick">
    <div v-if="info" class="vu-badge__info">{{ info }}</div>
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'VuBadge',
  props: {
    url: String,
    info: String,
    title: String
  },

  beforeCreate () {
    this.$parent.badges.push(this);
  },

  computed: {
    isSelect () {
      return this.$parent.badges.indexOf(this) === this.$parent.activeKey;
    }
  },

  methods: {
    onClick () {
      this.$emit('click', this.$parent.badges.indexOf(this));
    }
  }
};
</script>
