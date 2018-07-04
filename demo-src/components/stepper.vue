<template>
  <div>
      <h1 class="demo-section__title">Stepper步进器</h1>
      <div>
          <h2 class="demo-block__title">基本用法</h2>
          
          <vu-stepper v-model="stepper1" />
    </div>

    <div>
        <h2 class="demo-block__title">禁用</h2>
    
        <vu-stepper v-model="stepper1" disabled />
    </div>

    <div>
        <h2 class="demo-block__title">高级用法</h2>
    
        <vu-stepper v-model="stepper2" :min="5" :max="40" :step="2" :default-value="9" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepper1: 1,
      stepper2: null
    };
  }
};
</script>

<style lang="scss" scoped>
  .vu-stepper {
    margin-left: 15px;
  }
</style>
