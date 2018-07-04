<template>
  <div>
    <h1 class="demo-section__title">Badge徽章</h1>

    <div>
      <h2 class="demo-block__title">基本用法</h2>

      <vu-badge-group :active-key="activeKey">
        <vu-badge :title="title" @click="onClick" />
        <vu-badge :title="title" @click="onClick" info="8" />
        <vu-badge :title="title" @click="onClick" info="99" />
        <vu-badge :title="title" @click="onClick" info="199" />
      </vu-badge-group>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      title: '标签名称'
    };
  },

  methods: {
    onClick(key) {
      this.activeKey = key;
    }
  }
};
</script>

<style lang="scss" scoped>
  .vu-badge-group {
    width: auto;
    margin: 0 15px;
    padding: 20px 0;
    background-color: #fff;

    &::after {
      display: none;
    }
  }

  .vu-badge {
    width: 85px;
    margin: 0 auto;
  }
</style>
