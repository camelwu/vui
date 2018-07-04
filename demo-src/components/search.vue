<template>
  <div>
    <h1 class="demo-section__title">search搜索</h1>

    <div>
      <h2 class="demo-block__title">基本用法</h2>

      <vu-search :placeholder="placeholder" v-model="value" />
    </div>

    <div>
      <h2 class="demo-block__title">title2</h2>

      <form action="/">
        <vu-search
          v-model="value"
          :placeholder="placeholder"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>

    <div>
      <h2 class="demo-block__title">title3</h2>

      <vu-search
        v-model="value"
        show-action
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </vu-search>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title2: '监听对应事件',
      title3: '自定义行动按钮',
      placeholder: '请输入商品名称',
      value: ''
    };
  },

  methods: {
    onSearch() {
      Toast(this.value);
    },
    onCancel() {
      Toast('取消');
    }
  }
};
</script>

<style lang="scss" scoped>
  .vu-search__action div {
    padding: 0 10px;
  }
</style>
