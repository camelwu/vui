<template>
  <div>
    <h1 class="demo-section__title">Layout布局</h1>

    <div>
      <h2 class="demo-block__title">{{ basicUsage }}</h2>
      <vu-row>
        <vu-col span="8">span: 8</vu-col>
        <vu-col span="8">span: 8</vu-col>
        <vu-col span="8">span: 8</vu-col>
      </vu-row>

      <vu-row>
        <vu-col span="4">span: 4</vu-col>
        <vu-col span="10" offset="4">offset: 4, span: 10</vu-col>
      </vu-row>

      <vu-row>
        <vu-col offset="12" span="12">offset: 12, span: 12</vu-col>
      </vu-row>
    </div>

    <div>
      <h2 class="demo-block__title">{{ title2 }}</h2>

      <vu-row gutter="20">
        <vu-col span="8">span: 8</vu-col>
        <vu-col span="8">span: 8</vu-col>
        <vu-col span="8">span: 8</vu-col>
      </vu-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
      title2: '在列元素之间增加间距',
      basicUsage: '基础用法'
    };
  }
};
</script>

<style lang="scss" scoped>
  .vu-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
</style>
