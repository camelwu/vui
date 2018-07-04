<template>
  <div class='demo-pagination'>
      <h1>Pagination</h1>
      <p>基础用法</p>
      <vu-pagination
        v-model="currentPage1"
        :total-items="24"
        :items-per-page="5"
        :prev-text= "prevText"
        :next-text= "nextText"
      />

      <p>简单模式</p>
      <vu-pagination
        v-model="currentPage2"
        :page-count="12"
        :prev-text= "prevText"
        :next-text= "nextText"
        mode="simple"
        size="small"
      />
      <vu-pagination
        force-ellipses
        v-model="currentPage3"
        :total-items="125"
        :show-page-size="3"
        :prev-text= "prevText"
        :next-text= "nextText"
      />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      prevText:'上一页',
      nextText:'下一页',
    };
  },
  methods:{
  }
};
</script>

<style lang="scss">
  .demo-pagination {
    text-align:left;
    .vu-pagination {
      margin: 20px 0;
      width: 100%;
    }

    .vu-doc-demo-block {
      padding: 0 15px;
    }

    .vu-doc-demo-block__title {
      padding-left: 0;
    }
  }
</style>
