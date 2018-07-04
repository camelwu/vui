<template>
  <vu-badge-group>
    <vu-badge title="热销榜" info="8" @click="onItemClick"></vu-badge>
    <vu-badge title="手握寿司" info="199" @click="onItemClick"></vu-badge>
  </vu-badge-group>
</template>

<script>
import Badge from 'packages/badge';
import BadgeGroup from 'packages/badge-group';

export default {
  components: {
    'vu-badge': Badge,
    'vu-badge-group': BadgeGroup
  },

  methods: {
    onItemClick() {}
  }
};
</script>
