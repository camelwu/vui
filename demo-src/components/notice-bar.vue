<template>
  <div>
    <h1 class="demo-section__title">noticeBar通告栏</h1>

    <div>
      <h2 class="demo-block__title">基本用法</h2>

      <vu-notice-bar
        :text="text"
        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </div>

    <div>
      <h2 class="demo-block__title">{{title2}}</h2>

      <vu-notice-bar :scrollable="false" :text="text" />
    </div>

    <div>
      <h2 class="demo-block__title">{{title3}}</h2>

      <vu-notice-bar mode="closeable" :text="text" />
      <vu-notice-bar mode="link" :text="text" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
  	return {
      title2: '禁用滚动',
      title3: '通告栏模式',
      text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
    }
  }
};
</script>

<style lang="scss" scoped>
  .vu-notice-bar:not(:first-of-type) {
    margin-top: 15px;
  }
  .vu-notice-bar {
    color: #ee3333;
  }
</style>
